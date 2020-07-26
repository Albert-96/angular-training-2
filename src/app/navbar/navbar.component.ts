import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : boolean = false;
  constructor(private loginServcie : LoginService,
              private router : Router) { }

  ngOnInit(): void {
    this.loginServcie.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    });
  }
  onLogOut() {
    this.loginServcie.logout();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

}
