import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { request } from '../Module/request';
import { Offer } from '../Module/offer'

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  url = "http://localhost:50940/api/requests/"
  constructor(private http: HttpClient) { }


  addAndGet(request: request): Observable<request> {
    //debugger;
    return this.http.post<request>(this.url + 'AddRequest', request);
  }
  updateRequest(request: request): Observable<request> {
    //debugger;
    return this.http.post<request>(this.url + 'UpdateRequest', request);
  }
  ConnectDriver(idOffer: number, idRequest: number) {
    // ??איך לקרוא לפונקציה
    return this.http.post(this.url, "/connectDriver ?idOffer=" + idOffer + "?idRequest=" + idRequest);

  }
  drivers(id: number): Observable<request> {
    return this.http.get<request>(this.url + id);
  }
  getByPersonId(id: number): Observable<request[]> {//יש הבדל אם חוזר list או arr?

    return this.http.get<request[]>(this.url + "getByPersonId/" + "?id=" + id);

  }
  getWithOffersByPersonId(id: number): Observable<request[]> {//יש הבדל אם חוזר list או arr?

    return this.http.get<request[]>(this.url + "getWithOffersByPersonId/" + "?id=" + id);

  }
  getHistoryWithOffersByPersonId(id: number): Observable<request[]> {//יש הבדל אם חוזר list או arr?

    return this.http.get<request[]>(this.url + "GetHistoryWithOffersByPersonId/" + "?id=" + id);

  }




  getById(id: number) {
    //debugger;
    return this.http.get<request>(this.url + "getById/" + "?id=" + id);

  }
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + "DeleteRequest?id=" + id);
  }


  deletefromlist(idOffer: number, idRequest: number) {

    return this.http.post(this.url, "  deletefromlist ?idOffer=" + idOffer + "?idRequest=" + idRequest);

  }
}
