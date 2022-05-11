import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../Services/requests.service';
@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.css']
})
export class AcceptRequestComponent implements OnInit {

  constructor(private route:ActivatedRoute,private requests:RequestsService) { }

  ngOnInit(): void {
  //   this.route.queryParams.subscribe((p: any) => {
  //     alert(p['reqid']);
  //     alert(p['offerid']);
 
      
  //     //Set ignore field to the request
  //  });
 this.requests
  }

}
