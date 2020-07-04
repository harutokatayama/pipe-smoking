import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const aaa = this.route.snapshot.url[2].path;
    const bbb = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe( params => {
      const id = +params.get('id');
      this.getProduct(id);
    });
  }

  getProduct(id) {
  }

  back() {
    this.router.navigate(['/products']);
  }

}
