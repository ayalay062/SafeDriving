import { Component, OnInit } from '@angular/core';
import {Offer} from '../Module/offer';
import {  OffersService } from '../Services/offers.service';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { request } from '../Module/request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {
id:number=1234;//לקבל את זה מהקומפוננט האב
offer:Offer=null;
requestList:request[];
myForm:FormGroup;
// myForm = new FormGroup({
//    resource: new FormControl(this.offer.resourse,[Validators.required]),
//    destination: new FormControl(this.offer.destination,[Validators.required]),
//    seats: new FormControl(this.offer.seats,[Validators.required,Validators.min(1)]),
//    dateTime: new FormControl(this.offer.date_time,[Validators.required]),
//    price: new FormControl(this.offer.price,[Validators.required,Validators.min(1)]),
//  }); 
  constructor(private offers:OffersService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.id=JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
alert(this.activatedRoute.snapshot.paramMap.get('id'));
    this.offers.getById(this.id).subscribe(
        res=>{
          this.offer=res;
          this.myForm = new FormGroup({
            resource: new FormControl(this.offer.resourse,[Validators.required]),
            destination: new FormControl(this.offer.destination,[Validators.required]),
            seats: new FormControl(this.offer.seats,[Validators.required,Validators.min(1)]),
            dateTime: new FormControl(this.offer.date_time,[Validators.required]),
            price: new FormControl(this.offer.price,[Validators.required,Validators.min(1)]),
          });  
        },
        err=>{console.log("faild!")}
     )      
  }
  reset(){
    this.myForm.reset('',);
  }
  onSubmit():void{
//debugger;
//מחיקת הנסיעה הקודמת

  this.offers.delete(this.id).subscribe(
    res=>{console.log("הנסיעה הראשונה נמחקה")},
    err=>{console.log("faild!")}
  )

this.offer.date_time=this.myForm.value.dateTime;//תואמים? שני סוגי הזמנים?
this.offer.price=this.myForm.value.price;
this.offer.seats=this.myForm.value.seats;
this.offer.destination=this.myForm.value.destination;
this.offer.resourse=this.myForm.value.resource;
this.offers.addAndGet(this.offer).subscribe(res=>{console.log("הנסיעה נוספה");
this.requestList=res;
//בקשת נסיעות מתאימות, קבלתם והצגתם למשתמש לצורך בחירה
// debugger;
}
,err=>{console.log("not good :(")});


  }
}
