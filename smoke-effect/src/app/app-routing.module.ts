import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './Top/top/top.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { ProductRouteActivator } from './shared/services/product-route-activator.service';
import { ProductsResolver } from './shared/services/products-list-resolver.service';


const ROUTES: Routes = [      
  { path: 'top', component: TopComponent, resolve: {products: ProductsResolver} },
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
