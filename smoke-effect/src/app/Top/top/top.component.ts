import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from 'src/app/shared/models/products.model';

@Component({
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  products: any;
  productsSections: any[];
  errorMessage

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService ) { }

  ngOnInit() {
    let aaa = this.route.snapshot.routeConfig.path;
    this.extractSections();

  }

  extractSections() {
    // this.productsService.getProducts().subscribe(products => {
    //   this.products = products
    // });
    this.products = this.route.snapshot.data['products']
    // this.productsService.getProducts().subscribe({
    //   next: products => {
    //     this.products = products;
    //   },
    //   error: err => this.errorMessage = err
    // })
    this.productsSections = this.products.map(product => product.section);
    this.productsSections = this.unique(this.productsSections);
  }

  unique(array: any[]) {
    let result = array.filter(function(x, i, self) {
      return self.indexOf(x) === i;
    });
    return result;
  }

}
