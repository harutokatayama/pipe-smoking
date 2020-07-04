import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from 'protractor';

@Component({
    selector: 'upvote',
    template: `
      <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
          <div class="votingButton">
          </div>
          <div class="badge badge-inverse wantingCount">
            <div>{{want}}</div>
          </div>
        </div>
      </div>
    `,
    styles: [`

    `]
})

export class UpvoteComponent {
    @Input() want: number;

    onClick() {
    }
}
