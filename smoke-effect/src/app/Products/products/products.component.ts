import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProducts } from 'src/app/shared/models/products.model';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  filterBy = 'all';
  sortBy = 'name';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
    ){}

  ngOnInit() {
    this.products = this.route.snapshot.data['products']
  }
}
