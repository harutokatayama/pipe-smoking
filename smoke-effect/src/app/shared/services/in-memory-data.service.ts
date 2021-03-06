import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProducts } from '../models/products.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    PRODUCTS: IProducts[]
    createDb() {
        this.PRODUCTS = [
            {
              id: 1,
              name: 'Dunhil charch warden',
              price: 288.00,
              section: 'pipe',
              imageUrl: 'assets/images/samplePipe.jpg',
              brandName: 'Dunhil',
              type: 'Charch warden',
              stock: 10,
              origin: 'denmark',
              evaluation: 10,
              condition: 5,
              strength: null,
              want: 554,
              sold: 146,
            },
            {
              id: 2,
              name: 'Tuge hand made',
              price: 488.00,
              section: 'pipe',
              imageUrl: 'assets/images/samplePipe2.jpg',
              brandName: 'tuge',
              type: 'billiard',
              stock: 5,
              origin: 'canada',
              evaluation: 9,
              condition: 5,
              strength: null,
              want: 576,
              sold: 498
            },
            {
              id: 3,
              name: 'high chimney',
              price: 188.00,
              section: 'cigar',
              imageUrl: 'assets/images/samplePipe3.jpg',
              brandName: 'tuge',
              type: 'chimney',
              stock: 5,
              origin: 'canada',
              evaluation: 7,
              condition: 5,
              strength: null,
              want: 543,
              sold: 389
            },
            {
              id: 4,
              name: 'basic hand made',
              price: 128.00,
              section: 'cigar',
              imageUrl: 'assets/images/samplePipe4.jpg',
              brandName: 'tuge',
              type: 'basic',
              stock: 5,
              origin: 'canada',
              evaluation: 9,
              condition: 5,
              strength: null,
              want: 534,
              sold: 1200
            },
            {
              id: 5,
              name: 'Coral',
              price: 148.00,
              section: 'pipe',
              imageUrl: 'assets/images/samplePipe5.jpg',
              brandName: 'tuge',
              type: 'coral',
              stock: 5,
              origin: 'canada',
              evaluation: 6,
              condition: 5,
              strength: null,
              want: 513,
              sold: 3891
            },
            {
              id: 6,
              name: 'Arama',
              price: 20.00,
              section: 'happa',
              imageUrl: 'assets/images/can.jpg',
              brandName: 'dunhil',
              type: 'coral',
              stock: 5,
              origin: 'canada',
              evaluation: 10,
              condition: 5,
              strength:9,
              want: 621,
              sold: 3893
            },
            {
              id: 7,
              name: 'White Vanila',
              price: 30.00,
              section: 'happa',
              imageUrl: 'assets/images/kusa.jpg',
              brandName: 'dunhil',
              type: 'coral',
              stock: 5,
              origin: 'canada',
              evaluation: 5,
              condition: 5,
              strength:6,
              want: 376,
              sold: 1980
            }
        ];
        return this.PRODUCTS
    }

    getProducts() :Observable<IProducts[]> {
        let subject = new Subject<IProducts[]>()
        setTimeout(() => {
          subject.next(this.PRODUCTS);
          subject.complete();
        }, 100)
        return subject;
    
        //HTTP 
        // return this.http.get<IProducts[]>('/api/events/')
        //   .pipe(catchError(this.handleError<IProducts[]>('getProducts', [])))
    }
}