import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { JobType } from '../Models/jobtype.model';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUp: FormGroup;
  jobType : JobType[] = [
    new JobType('Public','Public'),
    new JobType('Private','Private'),
    new JobType('Other','')
  ];

  closeButton: HTMLElement;

  constructor(private fb : FormBuilder,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.signUp = this.fb.group({
      'username': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'jobtype': new FormControl(this.jobType[0].jobType, [Validators.required]),
      'jobdescription' : new FormControl(this.jobType[0].jobDescription, [Validators.required])
    });
    this.closeButton = document.getElementById('signClose') as HTMLElement;
    this.onChanges();
  }

  onChanges() {
    this.signUp.controls['jobtype'].valueChanges.subscribe(data => {
      if (this.signUp.get('jobtype').value == 'Other') {
        this.signUp.controls['jobdescription'].setValue('');
      }
      else {
        this.signUp.controls['jobdescription'].setValue(this.signUp.get('jobtype').value);
      }
    });
  }

  onSubmit() {
    let user = new User(
      this.signUp.get('username').value,
      this.signUp.get('password').value,
      this.signUp.get('jobtype').value,
      this.signUp.get('jobdescription').value,
    );
    this.loginService.addUser(user);
    this.closeButton.click();
  }

}
