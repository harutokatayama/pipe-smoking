import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapse',
    template: `
      <div class="pointable">
        <h4 class="toggleTrigger" (click)="toggleContent()">
          <ng-content select="[collapse-title]"></ng-content>
        </h4>
          <ng-content *ngIf="visible" select="[collapse-body]"></ng-content>
      </div>
    `,
    styles: [`
      .toggleTrigger { cursor: pointer }
    `]
})
export class CollapseComponent {
    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
