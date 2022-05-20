import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { person } from '../Module/person';
import { personInfo } from '../Module/personInfo';
//import {Http, Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})


export class LoginService {
  url = "http://localhost:50940/api/person"

  userLogin = new Subject<string>();
  constructor(private http: HttpClient) { }

  signIn(person: person): Observable<personInfo> {
    // const headers = new Headers();
    //     headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //     headers.append('Access-Control-Allow-Methods', 'GET');
    //     headers.append('Access-Control-Allow-Origin', '*');
    //debugger;
    return this.http.get<personInfo>(this.url + "?email=" + person.mail + "&password=" + person.password);
  }
  signUp(person: person): Observable<personInfo> {
    // const headers = new Headers();
    //     headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //     headers.append('Access-Control-Allow-Methods', 'GET');
    //     headers.append('Access-Control-Allow-Origin', '*');
    debugger;
    return this.http.post<personInfo>(this.url + '/createNewPerson', person);
  }

}