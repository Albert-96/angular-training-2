import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, OnInit {

  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isAuthenticated) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
