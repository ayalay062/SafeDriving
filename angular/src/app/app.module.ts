

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import {BorrowFormComponent} from './borrow-form/borrow-form.component'
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component'
import { OffersFormComponent } from './offers-form/offers-form.component';
import { RequestsComponent } from './requests/requests.component';
import { PrivateAreaComponent } from './private-area/private-area.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ApdateofferComponent } from './apdate-offer/apdate-offer.component';
//import { LoginService } from './services/login.service';
// import { offersComponent } from './offers/offers.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { IgnoreRequestComponent } from './ignore-request/ignore-request.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    pathMatch: 'full'
  },
  { path: 'signInForm', component: SignInComponent },
  { path: 'signUpForm', component: SignUpFormComponent },

  {
    path: 'privateArea', component: PrivateAreaComponent,
    children: [{
      path: 'offersForm', component: OffersFormComponent//,pathMatch: "full"
    },
    { path: 'RequestsForm', component: RequestsComponent }
      , { path: 'updateRequest', component: UpdateRequestComponent }

    ]
  }, { path: 'updateOffer/:id', component: UpdateOfferComponent }
  , { path: 'ignore-request', component: IgnoreRequestComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // BorrowFormComponent,
    SignUpFormComponent,
    SignInComponent,
    OffersFormComponent,
    RequestsComponent,

    PrivateAreaComponent,





    UpdateOfferComponent,

    UpdateRequestComponent,

    IgnoreRequestComponent,

    AcceptRequestComponent,

    AboutComponent,

    // SuggestionsOffersComponent
    //  ApdateofferComponent
    // offersComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule

  ],
  exports: [

    // MatTableModule,
    // MatSortModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatIconModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatButtonModule
  ],

  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
