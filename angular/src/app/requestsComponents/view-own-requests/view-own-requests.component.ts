import { Component, OnInit } from '@angular/core';
import { request } from 'src/app/Module/request';
import { RequestsService } from 'src/app/Services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-own-requests',
  templateUrl: './view-own-requests.component.html',
  styleUrls: ['./view-own-requests.component.css']
})
export class ViewOwnRequestsComponent implements OnInit {
  requests: request[] = [];
  requestsWithTravels: request[] = [];
  constructor(private reqService: RequestsService,
    private router:Router) { }
  personId = 0;
  ngOnInit(): void {
    this.personId = +localStorage.getItem('id');
    this.getPersonRequests();
  }

  getPersonRequests() {
    this.reqService.getByPersonId(this.personId).subscribe(x => {
      this.requests = x;
    });
    this.reqService.getWithOffersByPersonId(this.personId).subscribe(x => {
      this.requestsWithTravels = x;
    });


  }
  editReq(id: number) {
    this.router.navigateByUrl('updateRequest/' + id)
   }
  //Alert
  removeReqTravel(id: number) { }
  deleteReq(id: number) { }
}
