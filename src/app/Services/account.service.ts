import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  Users : User[] = [
    new User("T@T","T@T"),
  ];

  constructor() { }
}
