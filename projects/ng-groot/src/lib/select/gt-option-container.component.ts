import {Component, Input, QueryList, Output, EventEmitter} from '@angular/core';
import {GtOptionComponent} from './gt-option.component';

@Component({
    selector: 'gt-option-container',
    template: `
        <gt-option-item *ngFor="let option of listOfOption"
                        [option]="option"
                        (click)="clickOption(option.gtValue)"
        ></gt-option-item>
    `
})
export class GtOptionContainerComponent {
    @Input() listOfOption: QueryList<GtOptionComponent>;
    @Output() gtClickOption = new EventEmitter<any>();

    clickOption(val: any) {
        this.gtClickOption.emit(val);
    }
}
