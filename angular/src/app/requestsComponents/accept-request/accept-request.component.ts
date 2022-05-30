import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../Services/requests.service';
import { OffersService } from 'src/app/Services/offers.service';
@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.css']
})
export class AcceptRequestComponent implements OnInit {

  isLoading = true;
  message = '';
  constructor(private route: ActivatedRoute, private requests: RequestsService, private offerSer: OffersService) { }
  offerId = 0;
  reqId = 0;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      this.offerId = this.route.snapshot.params['offerId'];
      this.reqId = this.route.snapshot.params['reqId'];
      this.offerSer.checkSetOfferWithRequests(this.offerId, this.reqId).subscribe(x => {

        if (x === 1) {
          this.isLoading = false;
          this.message = "הרשמתך נקלטה בהצלחה!";
        }
        else if (x === 2) {
          this.isLoading = false;
          this.message = "הרשמתך נדחתה - מספר המקומות בנסיעה הגיע למכסה המקסימלית";

        }
        else if (x === 3) {
          this.isLoading = false;
          this.message = "הרשמתך כבר נקלטה בעבר!";

        }
        else{
          this.isLoading = false;
          this.message = "כבר נרשמת לנסיעה אחרת";

        }
      });
    });
  }


}
