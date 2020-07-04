import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { UpvoteComponent } from './Upvote/upvote.component';
import { RatingModule } from 'ng-starrating';
import { StarComponent } from '../shared/directives/star.component';
import { ProductRouteActivator } from '../shared/services/product-route-activator.service';
import { ProductsResolver } from '../shared/services/products-list-resolver.service';



const ROUTES: Routes = [
  { path: 'products', component: ProductsComponent, resolve: {products:ProductsResolver} },
  { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductRouteActivator] },
  { path: 'products/:id/edit', component: ProductEditComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductThumbnailComponent,
    ReviewComponent,
    UpvoteComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ProductsModule { }
