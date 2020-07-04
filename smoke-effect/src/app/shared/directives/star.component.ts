import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector:'star',
    template: `
      <div class="starContainer">
        <div class="wrapper" [style.width.px]="starWidth">
          <img class="star" src={{imgUrl}}>
          <img class="star" src={{imgUrl}}>
          <img class="star" src={{imgUrl}}>
          <img class="star" src={{imgUrl}}>
          <img class="star" src={{imgUrl}}>
        </div>
      </div>
    `,
    styles:[`
    .starContainer {
      width: 100px;
      height: 20px;
      white-space: nowrap;
    }

    .wrapper {
      height: 20px;
      overflow: hidden;
    }

    .star {
      height: 20px;
      width: 20px;
    }
    `]    
})
export class StarComponent implements OnChanges {

    @Input() rating: number = 4;
    starWidth: number;
    imgUrl = './assets/images/star.png';

    ngOnChanges(): void {
        this.starWidth = this.rating * 100 / 5;
    }

}