import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IProducts } from 'src/app/shared/models/products.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit, OnChanges {
  @Input() products: IProducts[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() visibleProducts: IProducts[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.products) {
      this.filterProducts(this.filterBy);
      this.sortProducts(this.sortBy);
    }
  }

  filterProducts(filter) {
    if (filter === 'all') {
      this.visibleProducts = this.products.slice(0);
    } else {
      this.visibleProducts = this.products.filter(product => {
        return product.section.toLowerCase() === filter;
      })
    }
  }

  sortProducts(sort) {
    if (sort === 'name') {
      this.visibleProducts.sort(this.sortByNameAsc);
    } else if (sort === 'price') {
      this.visibleProducts.sort(this.sortByPriceDesc);
    } else if (sort === 'evaluation') {
      this.visibleProducts.sort(this.sortByEvaluatinnDesc);
    }
  }

  sortByNameAsc(s1: IProducts, s2: IProducts) {
    if (s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1
  }

  sortByPriceDesc(s1: IProducts, s2: IProducts) {
    return s2.price - s1.price;
  }

  sortByEvaluatinnDesc(s1: IProducts, s2: IProducts) {
    return s2.evaluation - s1.evaluation;
  }

}
