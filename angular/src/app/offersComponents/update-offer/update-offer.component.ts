import { Component, OnInit } from '@angular/core';
import { Offer } from '../../Module/offer';
import { OffersService } from '../../Services/offers.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { request } from '../../Module/request';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelsService } from 'src/app/Services/travels.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {
  id: number = 1234;//לקבל את זה מהקומפוננט האב
  offer: Offer = null;
  requestList: request[];
  myForm = new FormGroup({
    resourse: new FormControl(null, [Validators.required]),
    destination: new FormControl(null, [Validators.required]),
    seats: new FormControl('1', [Validators.required, Validators.min(1)]),
    date_time: new FormControl(null, [Validators.required]),
    resourse_city: new FormControl(null, [Validators.required]),
    destination_city: new FormControl(null, [Validators.required]),
    id: new FormControl('0'),
    active: new FormControl('1'),
    ignore_offers: new FormControl(null),
    remarks: new FormControl(null, [Validators.required]),
    price: new FormControl('0', [Validators.required, Validators.min(0)]),
  });
  constructor(private router: Router, private offers: OffersService, private route: ActivatedRoute,
    private fb: FormBuilder, public travelSer: TravelsService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      var id = this.route.snapshot.params['id'];
      this.offers.getById(id).subscribe(x => {
        this.myForm = this.fb.group(x);
        this.myForm.patchValue({ date_time: new Date(new Date(x.date_time).setTime(new Date(x.date_time).getTime() + (3 * 60 * 60 * 1000))).toISOString().substring(0, 16) })
      });
    });
  }
  reset() {
    this.myForm.reset('',);
  }
  onSubmit(): void {

    
    var r = <Offer>this.myForm.value;
    r.active = true;
    var id = +localStorage.getItem('id');

    r.id_person = id;
    this.offers.update(r).subscribe(res => {
      if (res == null) {

        Swal.fire('', "ארעה שגיאה במערכת", 'error');
      }
      else {
        Swal.fire('', "הצעת הנסיעה נוספה בהצלחה", 'success');
        this.router.navigateByUrl('privateArea/ActiveRequests/' + res);

      }
      // this.offerList = res;
      //debugger;
    }, err => { console.log("not good " + JSON.stringify(err)) });


    
    // //debugger;
    // //מחיקת הנסיעה הקודמת

    // this.offers.delete(this.id).subscribe(
    //   res => { console.log("הנסיעה הראשונה נמחקה") },
    //   err => { console.log("faild!") }
    // )

    // this.offer.date_time = this.myForm.value.dateTime;//תואמים? שני סוגי הזמנים?
    // this.offer.price = this.myForm.value.price;
    // this.offer.seats = this.myForm.value.seats;
    // this.offer.destination = this.myForm.value.destination;
    // this.offer.resourse = this.myForm.value.resource;
    // this.offers.addAndGet(this.offer).subscribe(res => {
    //   console.log("הנסיעה נוספה");
    //   //this.requestList=res;
    //   //בקשת נסיעות מתאימות, קבלתם והצגתם למשתמש לצורך בחירה
    //   // debugger;
    // }
    //   , err => { console.log("not good :(" + err) });


  }
}
