import { Component, OnInit } from '@angular/core';
import { request } from 'src/app/Module/request';
import { RequestsService } from 'src/app/Services/requests.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    this.router.navigateByUrl('privateArea/updateRequest/' + id)
   }

   


  //Alert
  removeReqTravel(id: number) { }
  deleteReq(id: number) {

    Swal.fire({
      title: 'האם את/ה בטוח/ה?',
      text: "האם את/ה בטוח/ה שאת/ה רוצה למחוק את הנסיעה הנוכחית?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: 'כן',
      cancelButtonText: 'לא',
    }).then((result) => {
      if (result.isConfirmed) {
        this.reqService.delete(id).subscribe((x) => {
          this.reqService.getByPersonId(this.personId).subscribe(x => {
            this.requests = x;
          });
        });
      }
    });
  


   }
}
