import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IProducts } from 'src/app/shared/models/products.model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { OpeningComponent } from 'src/app/Opening/opening/opening.component';
import { Router } from '@angular/router';
import { 
  faUser,
  faShoppingCart,
  faSearch,
  faSearchPlus,
  faJoint
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  searchTerm = '';
  foundProducts: IProducts[];
  cartNumber: number;

  //icons
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faSearchPlus = faSearchPlus;
  faJoint = faJoint;

  constructor(
    private router: Router,
    private openingComponent: OpeningComponent,
    private userService: UserService,
    private productsService: ProductsService,
  ) {

  }

  ngOnInit() {
    this.user = this.userService.getUser(0);
    this.productsService.cartNumber = this.user.cart.length;
    this.cartNumber = this.productsService.cartNumber
  }

  loadOpening() {
    this.router.navigateByUrl('/top')
  }

  search(searchTerm) {
    this.productsService.searchProducts(searchTerm);
  }

  searchProducts(searchTerm) {
    this.productsService.searchProducts(searchTerm).subscribe(
      products => {
        this.foundProducts = products;
      }
    );
  }

}
