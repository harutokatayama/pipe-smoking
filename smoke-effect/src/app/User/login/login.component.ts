import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public previousRoute: string;
  public emailMessage: string;
  public passwordMessage: string;
  public validationMessagesEmail = 
  {
    required: 'Please enter your email.',
    minlength: 'The first name must be longer than 8 characters.'
  };

  public validationMessagesPassword = 
  {
    required: 'Please enter your email.',
    email: 'Please enter a valid a email address.'
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',
        [Validators.required, Validators.minLength(8)]],
    });

    const passwordControl = this.loginForm.get('password');
    passwordControl.valueChanges.subscribe(
      value => this.setMessage(passwordControl)
    );

    const emailControl = this.loginForm.get('email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage2(emailControl)
    );
  }

  onLogin() {
    this.userService.loginStatus = true;
    this.router.navigate(['/products']);
  }

  setMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors).map(
        key => this.validationMessagesEmail[key]).join(' ');
    }
  }

  setMessage2(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessagesPassword[key]).join(' ');
    }
  }

}
