import {Component, Input} from '@angular/core';
import {GtOptionComponent} from './gt-option.component';

@Component({
    selector: 'gt-option-item',
    template: `
        <div>{{option.gtLabel}}</div>
    `
})
export class GtOptionItemComponent {
    @Input() option: GtOptionComponent;
}
