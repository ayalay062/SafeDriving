import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { request } from '../../Module/request';
import { Router } from '@angular/router';
import { Offer } from '../../Module/offer';
import { OffersService } from '../../Services/offers.service';
import { identifierModuleUrl } from '@angular/compiler';

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

    resource: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    seats: new FormControl('', [Validators.required, Validators.min(1)]),
    dateTime: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),


  });

  constructor(private router: Router, private offers: OffersService) { }

  ngOnInit(): void {

  }

  reset() {
    this.myForm.reset('',);
  }
  onSubmit(): void {
    //debugger;
    this.offer.id_person = +localStorage.getItem('id');
    this.offer.date_time = this.myForm.value.dateTime;
    this.offer.price = this.myForm.value.price;
    this.offer.seats = this.myForm.value.seats;
    this.offer.destination = this.myForm.value.destination;
    this.offer.resourse = this.myForm.value.resource;
    this.offer.id = 0;
    this.offer.active = true;

    

    this.offers.addAndGet(this.offer).subscribe(res => {
      console.log("הנסיעה נוספה");
      if (res == null) {

        alert("No suitable trips were found")
      }
      else {
        this.requestList = res;
        //הכנסת הנתונים למערך
        //בקשת נסיעות מתאימות, קבלתם והצגתם למשתמש לצורך בחירה
        // debugger;

      }

    }
      , err => { console.log("not good :(") });


  }
  onClick(id: number): void {
    this.offers.selectOfferByRequestId(id, this.offer.id).subscribe(res => {

      console.log("Please wait! ")

    }, err => { console.log("Operation failed ") });



  }

}





