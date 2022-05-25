import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { request } from '../../Module/request';
import { Router } from '@angular/router';
import { Offer } from '../../Module/offer';
import { OffersService } from '../../Services/offers.service';
import { identifierModuleUrl } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offers-form',
  templateUrl: './offers-form.component.html',
  styleUrls: ['./offers-form.component.css']
})
export class OffersFormComponent implements OnInit {
  requestList: request[];
  offer = new Offer();
  id: number;
  myForm = new FormGroup({
    resourse: new FormControl(null, [Validators.required]),
    destination: new FormControl(null, [Validators.required]),
    seats: new FormControl('1', [Validators.required, Validators.min(1)]),
    date_time: new FormControl(null, [Validators.required]),
    id: new FormControl('0'),
    active: new FormControl('1'),
    price: new FormControl('0', [Validators.required, Validators.min(0)]),
  });




  constructor(private router: Router, private offers: OffersService) { }

  ngOnInit(): void {

  }

  reset() {
    this.myForm.reset('',);
  }
  onSubmit(): void {

    var r = <Offer>this.myForm.value;
    r.active = true;
    var id = +localStorage.getItem('id');

    r.id_person = id;
    this.offers.addAndGet(r).subscribe(res => {
      if (res == null) {

        Swal.fire('', "ארעה שגיאה במערכת", 'error');
      }
      else{
        Swal.fire('', "הצעת הנסיעה נוספה בהצלחה", 'success');
        this.router.navigateByUrl('privateArea/ActiveRequests/'+res);

      }
     // this.offerList = res;
      //debugger;
    }, err => { console.log("not good " + JSON.stringify(err) ) });



    // //debugger;
    // this.offer.id_person = +localStorage.getItem('id');
    // this.offer.date_time = this.myForm.value.dateTime;
    // this.offer.price = this.myForm.value.price;
    // this.offer.seats = this.myForm.value.seats;
    // this.offer.destination = this.myForm.value.destination;
    // this.offer.resourse = this.myForm.value.resource;
    // this.offer.id = 0;
    // this.offer.active = true;

    

    // this.offers.addAndGet(this.offer).subscribe(res => {
    //   console.log("הנסיעה נוספה");
    //   if (res == null) {

    //     alert("No suitable trips were found")
    //   }
    //   else {
    //     this.requestList = res;
    //     //הכנסת הנתונים למערך
    //     //בקשת נסיעות מתאימות, קבלתם והצגתם למשתמש לצורך בחירה
    //     // debugger;

    //   }

    // }
    //   , err => { console.log("not good :(") });


  }
  onClick(id: number): void {
    this.offers.selectOfferByRequestId(id, this.offer.id).subscribe(res => {

      console.log("Please wait! ")

    }, err => { console.log("Operation failed ") });



  }

}





