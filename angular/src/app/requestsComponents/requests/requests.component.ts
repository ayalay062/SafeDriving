import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../Services/requests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { request } from '../../Module/request';
import { Offer } from '../../Module/offer';
import Swal from 'sweetalert2';
import { TravelsService } from 'src/app/Services/travels.service';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  offerList: Offer[] = null;
  person = new request();
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
  });


  constructor(private requests: RequestsService, private router: Router, public travelSer: TravelsService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    var r = <request>this.myForm.value;
    r.active = true;
    var id = +localStorage.getItem('id');

    r.id_person = id;
    this.requests.addAndGet(r).subscribe(res => {
      if (res == null) {

        Swal.fire('', "ארעה שגיאה במערכת", 'error');
      }
      else {
        Swal.fire('', "בקשת הנסיעה נוספה בהצלחה", 'success');
        this.router.navigateByUrl('privateArea/ActiveOffers');

      }
      // this.offerList = res;
      //debugger;
    }, err => { console.log("not good ") });

    //  this.router.navigate(['SuggestionsOffers']);
  }

  onClick(id: number): void {
    this.requests.ConnectDriver(id, this.person.id).subscribe(res => {

      console.log("Please wait! ")

    }, err => { console.log("Operation failed ") });



  }
}
