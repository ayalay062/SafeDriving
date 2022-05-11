import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import {  request } from '../Module/request';
import { person } from '../Module/person';
import { ErrorTypes } from '../Module/personInfo';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  person = new person();
  errorMassege:string;
 
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  });
  constructor(private router: Router,private login: LoginService ) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    //debugger
    this.person.mail = this.myForm.value.email;
    this.person.password = this.myForm.value.password;
    this.login.signIn(this.person).subscribe(res => {
    debugger;
      if(res.Status){
        this.person = res.Person;
         localStorage.setItem('id', JSON.stringify(res. Person.id));      
         localStorage.setItem('name', res.Person.username); 
        alert('sucsses'+res.Person.id)
        this.router.navigate(['privateArea']);
      }else{
        if(res.errorType == ErrorTypes.errorEmail){
          this.errorMassege = "כתובת אימייל לא קיימת"
        }
        else{
          this.errorMassege = "סיסמה שגויה"

        }
      }   


      //debugger;
    }, err => {
this.errorMassege = "שגיאת שרת";
console.log("faild !") });
  }
  new():void{
    this.router.navigate(['signUpForm']);
  }

  
  reset(): void {
    this.myForm.reset('',);
  }
}
