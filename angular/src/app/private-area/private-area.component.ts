import { Component, OnInit } from '@angular/core';
import { request } from '../Module/request';
import { travel } from '../Module/Travels';
import { Offer } from '../Module/offer';
//import { Route } from '@angular/compiler/src/core';
import { OffersService } from '../Services/offers.service';
import { RequestsService } from '../Services/requests.service';
import { TravelsService } from '../Services/travels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {

  id: number;
  zmani: number = 121212121;
  travelList: travel[] = null;
  offerList: Offer[] = null;
  requestList: request[] = null;
  constructor(private offers: OffersService, private requests: RequestsService
    , private travels: TravelsService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('id') == null) {
      alert("אינך מחובר, הנך מועבר לדף הכניסה")
      this.router.navigate(['signInForm']);

    }
    else {
      this.id = JSON.parse(localStorage.getItem('id'));
      this.travelList;
      this.offerList;
      this.requestList;
    }

  }
  travel(): void {
    this.travels.getByTz(this.zmani).subscribe(
      res => { this.travelList = res },
      err => { console.log("faild!") }
    )
  }
  request(): void {
    this.requests.getByTz(this.zmani).subscribe(
      res => { this.requestList = res; },
      err => { console.log("faild!") }
    )
  }
  offer(): void {
    this.offers.getByTz(this.zmani).subscribe(
      res => { 
        if(res==null)
        
        {alert("לא נצמאו נסיעות בתוקף")}
        this.offerList = res; },
      err => { console.log("faild!") }
    )
  }
  change_request(id_req: number): void {//להעביר לקומפוננט אחר
    this.router.navigate(['updateRequest', id_req]);//להעביר גם את מספר הנסיעה
  }
  delete_request(id_req: number): void {
    this.requests.delete(id_req).subscribe(
      res => { alert("נסיעתך נמחקה") },
      err => { console.log("faild!") }
    )
  }
  change_offer(id_off: number): void {//להעביר לקומפוננט אחר
    alert(id_off);
    this.router.navigate(['updateOffer', id_off]);//להעביר גם את מספר הנסיעה
  }
  delete_offer(id_off: number): void {
    this.offers.delete(id_off).subscribe(
      res => { alert("נסיעתך נמחקה") },
      err => { console.log("faild!") }
    )
  }
  selectOffer(){
    this.offers.selectOfferByRequestId(100,100).subscribe(
      res => { alert("נסיעתך ") },
      err => { console.log("faild!") }
    )


  }
}
