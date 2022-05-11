import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { person } from '../Module/person';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import {ErrorTypes} from '../Module/personInfo';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  person=new person();
  myForm:FormGroup=new FormGroup({
    username:new FormControl(),
    tz:new FormControl(),
    address:new FormControl(),
    mail:new FormControl(),
    phone:new FormControl(),
    inqure:new FormControl(),
    password:new FormControl()
    });
    
  constructor(private login:LoginService,private router:Router ) { }
  //
  message:string="";//להציג את ההודעה
  ngOnInit(): void {
  }
  onSubmit():void{

    this.person.tz=this.myForm.value.tz;
    this.person.address=this.myForm.value.address;
    this.person.mail=this.myForm.value.mail;
    this.person.phone=this.myForm.value.phone;
    this.person.username=this.myForm.value.username;
    this.person.inqure=this.myForm.value.inqure;
    this.person.password=this.myForm.value.password;


    this.login.signUp(this.person).subscribe(res => {
      if(res.Status){
        this.person = res.Person;//לכאורה זה מה שיש וזה מיותר
        localStorage.setItem('id', JSON.stringify(res.Person.tz));  
        localStorage.setItem('name', res.Person.username);     
        this.router.navigate(['privateArea']);
      }else{
          this.message="כתובת המייל קימת במאגר";
          this.router.navigate(['signInForm']);
        }
      }   //    debugger;
    , err => {
this.message = "שגיאת שרת";
console.log("faild !") });
  }


new():void{
  this.router.navigate(['signInForm']);
}
reset():void{
  this.myForm.reset('',);
}
}