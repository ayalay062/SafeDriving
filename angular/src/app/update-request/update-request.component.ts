import { Component, OnInit } from '@angular/core';

import {Offer} from '../Module/offer';
import {  RequestsService } from '../Services/requests.service';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { request } from '../Module/request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  id:number=1234;//לקבל את זה מהקומפוננט האב
  request:request=null;
  offerList:Offer[];
  myForm = new FormGroup({
     resource: new FormControl(this.request.resourse,[Validators.required]),
     destination: new FormControl(this.request.destination,[Validators.required]),
     seats: new FormControl(this.request.seats,[Validators.required,Validators.min(1)]),
     dateTime: new FormControl(this.request.date_time,[Validators.required]),

   }); 
  constructor(private requests:RequestsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=JSON.parse(this.activatedRoute.snapshot.paramMap.get('req_id'));

    this.requests.getById(this.id).subscribe(
        res=>{this.request=res;},
        err=>{console.log("faild!")}
         ) 
  }
  reset(){
    this.myForm.reset('',);
  }
  onSubmit():void{
//debugger;
//מחיקת הנסיעה הקודמת

  this.requests.delete(this.id).subscribe(//kלהוסיף פונקציה
    res=>{console.log("הנסיעה הראשונה נמחקה")},
    err=>{console.log("faild!")}
  )

this.request.date_time=this.myForm.value.dateTime;//תואמים? שני סוגי הזמנים?

this.request.seats=this.myForm.value.seats;
this.request.destination=this.myForm.value.destination;
this.request.resourse=this.myForm.value.resource;
this.requests.addAndGet(this.request).subscribe(res=>{console.log("הנסיעה נוספה");
this.offerList=res;
//בקשת נסיעות מתאימות, קבלתם והצגתם למשתמש לצורך בחירה
// debugger;
}
,err=>{console.log("not good :(")});


  }
}
