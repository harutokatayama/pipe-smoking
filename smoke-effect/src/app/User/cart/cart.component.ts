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

  constructor(
    private userService: UserService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.loginStatus = this.userService.loginStatus;
    this.user = this.userService.getUser(0);
  }

}
