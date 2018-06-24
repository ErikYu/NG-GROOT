import {
    Component,
    Input,
} from '@angular/core';

@Component({
    selector: 'gt-option',
    template: `
        <ng-template>
            <ng-content></ng-content>
        </ng-template>
    `
})
export class GtOptionComponent {
    @Input() gtLabel: string;
    @Input() gtValue: any;
}
