import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../Models/user.model';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  isLoggedIn: boolean = null;
  isSubmitted: boolean = false;

  loginForm = this.fb.group({
    userName : new FormControl(this.user.username, [Validators.required]),
    passWord : new FormControl(this.user.password, [Validators.required])
  });

  get userName() { return this.loginForm.get('userName'); }

  get passWord() { return this.loginForm.get('passWord'); }

  constructor(private fb: FormBuilder,
    private loginServcie: LoginService,
    private router : Router) { 
  }

  ngOnInit(): void {
    this.loginServcie.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.loginServcie.login(this.userName.value, this.passWord.value);
    if (this.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

}
