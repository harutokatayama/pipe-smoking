import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user;
  loginStatus;
  searchTerm = '';
  foundProducts: IProducts[];
  cartNumber: number;

  constructor(
    private userService: UserService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.loginStatus = this.userService.loginStatus;
    this.user = this.userService.getUser(0);
    this.countCart(this.user);
    console.log(this.productsService.cartNumber)
  }

  public countCart(currentUser) {
    this.productsService.cartNumber = currentUser.cart.length;
    this.cartNumber = this.productsService.cartNumber
  }

}
