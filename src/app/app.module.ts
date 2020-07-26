import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccountService } from './Services/account.service';
import { LoginService } from './Services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageListComponent } from './message-list/message-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CovidDetailsComponent } from './covid-details/covid-details.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { ActiveDetailComponent } from './active-detail/active-detail.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    MessageListComponent,
    CountryListComponent,
    CovidDetailsComponent,
    ActiveDetailComponent,
    CountryPageComponent,
    AddCountryComponent,
    EditCountryComponent,
    DeleteCountryComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountService, LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
