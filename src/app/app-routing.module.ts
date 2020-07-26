import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { ActiveDetail } from './Models/active-cases.model';
import { ActiveDetailComponent } from './active-detail/active-detail.component';
import { CountryPageComponent } from './country-page/country-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'detail/:status/:country', canActivate: [AuthGuardService], component: ActiveDetailComponent},
  {path: 'countries', canActivate: [AuthGuardService], component: CountryPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
