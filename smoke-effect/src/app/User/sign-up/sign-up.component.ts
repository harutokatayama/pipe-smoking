import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true};
    }
    return null;
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm: FormGroup;
  public emailMessage: string;
  public emailConfirmMessage: string;

  // <FormArray> is a cast operator
  get addresses(): FormArray {
    return <FormArray>this.signupForm.get('addresses');
  }

  validationMessages = 
    {
      required: 'Please enter your email address.',
      email: 'Please enter a valid a email address.'
    }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.maxLength(40)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: [''],
      notification: ['email'],
      rating: [null, ratingRange(1, 5)],
      addresses: this.fb.array([this.buildAddress() ])
    });

    //set up watcher on the notificaton FormControl that is watching radio buttons
    this.signupForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    );

    const emailControl = this.signupForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );

  }

  addAddress(): void {
    this.addresses.push(this.buildAddress())
  }

  buildAddress(): FormGroup {
    return this.fb.group ({
      addressType: [''],
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  onSignUp() {
    this.userService.loginStatus = true;
    this.router.navigate(['/products']);
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.signupForm.get('phone');
    if (notifyVia === 'SMS') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();

  }

}
