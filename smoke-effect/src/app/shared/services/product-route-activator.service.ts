import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Injectable({
    providedIn: 'root'
})
export class ProductRouteActivator implements CanActivate {
    constructor(
        private productsService: ProductsService,
        private router: Router
    ) {}

    canActivate(route:ActivatedRouteSnapshot) {
        const productExists = !!this.productsService.getProduct(+route.params['id']);

        if (!productExists) {
            this.router.navigate(['/404'])
        } else {
            return productExists;
        }
    }

}