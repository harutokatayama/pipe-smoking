import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'search-modal',
    template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{title}}</h4>
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        </div>
        <div class="modal-body" (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
    `,
    styles: [`
      .modal-body { height: 500px; overflow-y: scroll; }
    `]
})
export class SearchModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeModalClick: string;
    @ViewChild('modalcontainer', {static: false} ) containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {}

    closeModal() {
        if (this.closeModalClick === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}
