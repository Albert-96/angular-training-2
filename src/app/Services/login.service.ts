import { Injectable, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { User } from '../Models/user.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  userAccounts: User[] = [];
  isLoggedIn = new Subject<boolean>();
  isAuthenticated: boolean = false;

  constructor(private accountService: AccountService) { 
    this.userAccounts = accountService.Users;
    console.log('login serve');
  }

  ngOnInit() {
  }

  login(username : string, password: string) {
    this.userAccounts.forEach(x => {
      if (x.username == username && x.password == password) {
        this.isLoggedIn.next(true);
        this.isAuthenticated = true;
      }
    });
  }

  logout() {
    this.isLoggedIn.next(false);
    this.isAuthenticated = false;
  }

  addUser(user: User) {
    this.userAccounts.push(user);
  }
}
