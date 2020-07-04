import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductsService } from './products.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsResolver implements Resolve<any> {
    constructor(private productsService: ProductsService){

    }

    resolve() {
        // return this.productsService.getProducts().pipe(map(products => products))
        return this.productsService.getProducts()
    }
}