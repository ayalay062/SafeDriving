import { Injectable } from '@angular/core';
import { Offer } from '../Module/offer'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { request } from '../Module/request';
//import { person } from '../Module/person';
//import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  url = "http://localhost:50940/api/offers/"

  constructor(private http: HttpClient) { }
  addAndGet(offer: Offer): Observable<number> {
    //debugger;
    return this.http.post<number>(this.url + "AddOffer", offer);
  }



  getAll(): Offer[] {
    return //?
  }
  getById(id: number) {
    //debugger;
    return this.http.get<Offer>(this.url + "getById/" + "?id=" + id);

  }
  getByPersonId(id: number): Observable<Offer[]> {//יש הבדל אם חוזר list או arr?
    //debugger;
    return this.http.get<Offer[]>(this.url + "getByPersonId/" + "?id=" + id);
  }
  delete(id: number): Observable<boolean> {
    return this.http.post<boolean>(this.url, "?id=" + id);
  }
  selectOfferByRequestId(offerId: number, reqId: number): Observable<boolean> {
    return this.http.get<boolean>(this.url
      + 'selectOfferByRequestId/' + offerId + '/' + reqId);
  }





}




