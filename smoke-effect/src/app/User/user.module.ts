import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';



const ROUTES: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    UserEditComponent,
    CartComponent,
    SignUpComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UserModule { }
