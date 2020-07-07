import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './Products/products.module';
import { UserModule } from './User/user.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { OpeningComponent } from './Opening/opening/opening.component';
import { TopComponent } from './Top/top/top.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { JQ_TOKEN, CollapseComponent, SearchModalComponent, ModalTriggerDirective } from './shared/barrel';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    OpeningComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    PageNotFoundComponent,
    CollapseComponent,
    SearchModalComponent,
    ModalTriggerDirective,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    ProductsModule,
    UserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    { provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
