import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../Services/requests.service';
@Component({
  selector: 'app-ignore-request',
  templateUrl: './ignore-request.component.html',
  styleUrls: ['./ignore-request.component.css']
})
export class IgnoreRequestComponent implements OnInit {

  constructor(private route:ActivatedRoute,private requests:RequestsService) { }

  ngOnInit(): void {
  //   this.requests.deletefromlist().subscribe(res=>{
  //     this.offerList=res;
  // //debugger;
  //      },err=>{console.log("not good :(")});
 
  //    this.router.navigate(['SuggestionsOffers']);
    this.route.queryParams.subscribe((p: any) => {
      this.requests.deletefromlist(p['reqid'],p['offerid']).subscribe(res=>{

        
      }
        
        ,err=>{console.log("not good :(")});
    //  alert(p['reqid']);
    //  alert(p['offerid']);

     
     //Set ignore field to the request
  });

  }

}
