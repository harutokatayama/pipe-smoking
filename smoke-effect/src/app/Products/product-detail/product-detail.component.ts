import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.product = this.productsService.getProduct(+params.id);
    });
  }

  backToLastPage() {
    this._location.back();
  }

}
