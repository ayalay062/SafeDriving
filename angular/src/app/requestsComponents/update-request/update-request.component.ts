import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../Services/requests.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { request } from '../../Module/request';
import { Offer } from '../../Module/offer';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {

  person = new request();
  myForm = this.fb.group({
    resourse: new FormControl(null, [Validators.required]),
    destination: new FormControl(null, [Validators.required]),
    seats: new FormControl('1', [Validators.required, Validators.min(1)]),
    date_time: new FormControl(null, [Validators.required]),
    id: new FormControl('0'),
    active: new FormControl('1'),
    ignore_offers: new FormControl(null)
  });


  constructor(private fb: FormBuilder, private requests: RequestsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      var id = +params['id'];
      this.requests.getById(id).subscribe(x => {
        this.myForm = this.fb.group(x);
        this.myForm.patchValue({ date_time: new Date(x.date_time).toISOString().substring(0, 16) })
      });
    });
  }
  onSubmit(): void {

    var r = <request>this.myForm.value;
    var id = +localStorage.getItem('id');

    r.id_person = id;
    this.requests.addAndGet(r).subscribe(res => {
      if (res == null) {

        Swal.fire('', "ארעה שגיאה במערכת", 'error');
      }
      else {
        Swal.fire('', "בקשת הנסיעה נוספה בהצלחה", 'success');
        this.router.navigateByUrl('ActiveOffers');

      }
      // this.offerList = res;
      //debugger;
    }, err => { console.log("not good ") });

    //  this.router.navigate(['SuggestionsOffers']);
  }

  onClick(id: number): void {
    this.requests.ConnectDriver(id, this.person.id).subscribe(res => {

      console.log("Please wait! ")

    }, err => { console.log("Operation failed ") });



  }
}





//   id: number = 1234;//לקבל את זה מהקומפוננט האב
//   request: request = null;
//   offerList: Offer[];
//   myForm = new FormGroup({
//     resource: new FormControl(this.request.resourse, [Validators.required]),
//     destination: new FormControl(this.request.destination, [Validators.required]),
//     seats: new FormControl(this.request.seats, [Validators.required, Validators.min(1)]),
//     dateTime: new FormControl(this.request.date_time, [Validators.required]),

//   });
//   constructor(private requests: RequestsService, private activatedRoute: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('req_id'));

//     this.requests.getById(this.id).subscribe(
//       res => { this.request = res; },
//       err => { console.log("faild!") }
//     )
//   }
//   reset() {
//     this.myForm.reset('',);
//   }
//   onSubmit(): void {
//     //debugger;
//     //מחיקת הנסיעה הקודמת

//     this.requests.delete(this.id).subscribe(//kלהוסיף פונקציה
//       res => { console.log("הנסיעה הראשונה נמחקה") },
//       err => { console.log("faild!") }
//     )

//     this.request.date_time = this.myForm.value.dateTime;//תואמים? שני סוגי הזמנים?

//     this.request.seats = this.myForm.value.seats;
//     this.request.destination = this.myForm.value.destination;
//     this.request.resourse = this.myForm.value.resource;
//     this.requests.addAndGet(this.request).subscribe(res => {
//       console.log("הנסיעה נוספה");
//      // this.offerList = res;
//       //בקשת נסיעות מתאימות, קבלתם והצגתם למשתמש לצורך בחירה
//       // debugger;
//     }
//       , err => { console.log("not good :(") });


//   }
// }
