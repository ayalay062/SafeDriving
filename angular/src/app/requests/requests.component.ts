import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../Services/requests.service';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { request } from '../Module/request';
import {Offer} from '../Module/offer';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
offerList:Offer[]=null;
  person=new request();
  myForm = new FormGroup({
    resource: new FormControl('',[Validators.required]),
    destination: new FormControl('',[Validators.required]),
    seats: new FormControl('',[Validators.required,Validators.min(1)]),
    dateTime: new FormControl('',[Validators.required])
  
  });
 
  constructor(private requests:RequestsService,private router: Router) { }

  ngOnInit(): void {
  }
    onSubmit():void{
      alert("we check please wait!")
      
     this.requests.addAndGet(this.myForm.value).subscribe(res=>{
       if(res==null){

        alert("No suitable travel requests were found")
       }
      this.offerList=res;
  //debugger;
       },err=>{console.log("not good ")});
 
    //  this.router.navigate(['SuggestionsOffers']);
    }

    reset(){
      this.myForm.reset('',);
    }
    onClick(id:number):void{
      this.requests.ConnectDriver(id,this.person.id).subscribe(res=>{

        console.log("Please wait! ")

      },err=>{console.log("Operation failed ")});
      
       

    }
}
