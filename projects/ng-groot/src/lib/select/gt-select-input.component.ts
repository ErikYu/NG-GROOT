import {Component, Input} from '@angular/core';
import {GtSelectMode} from './gt-select.component';

@Component({
    selector: 'gt-select-input',
    template: `
        <div *ngIf="isSingleMode">{{labelValueMap[selectedModel]}}</div>
        <div *ngIf="isMultipleMode">
            <div *ngFor="let model of selectedModel">{{labelValueMap[model]}}</div>
        </div>
    `
})
export class GtSelectInputComponent {
    private _mode: GtSelectMode;
    isSingleMode: Boolean;
    isMultipleMode: Boolean;

    @Input() selectedModel: any | any[];
    @Input() labelValueMap: object;

    @Input()
    get gtMode(): GtSelectMode {
        return this._mode;
    }
    set gtMode(val: GtSelectMode) {
        this._mode = val;
        this.isSingleMode = val === 'default';
        this.isMultipleMode = !this.isSingleMode;
    }
}
