import {
    Component,
    forwardRef,
    Input,
    ContentChildren,
    QueryList,
    AfterContentInit,
    HostListener,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {GtOptionComponent} from './gt-option.component';

export type GtSelectMode = 'default' | 'multiple';

@Component({
    selector: 'gt-select',
    template: `
        <gt-select-input [gtMode]="gtMode"
                         [selectedModel]="_model"
                         [labelValueMap]="labelValueMap"
        ></gt-select-input>
        <gt-option-container *ngIf="isOptionOpen"
                             [listOfOption]="listOfOption"
                             (gtClickOption)="onOptionClick($event)"
        ></gt-option-container>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => GtSelectComponent),
        multi: true
    }]
})
export class GtSelectComponent implements ControlValueAccessor, AfterContentInit {


    @Input() gtMode: GtSelectMode = 'default';

    @ContentChildren(GtOptionComponent) listOfOption: QueryList<GtOptionComponent>;

    _model: any | any[];
    labelValueMap: object;
    isOptionOpen = false;

    // the radio mode and multiple mode can share this value
    modelInList: any[];

    onOptionClick(e: any) {
        this.onModelChange(e);
        this._model = e;
    }

    onModelChange: Function = () => {};
    onModelTorched: Function = () => {};

    writeValue(val: any | any[]) {
        console.log(val);
        this._model = val;
        if (typeof(val) !== 'undefined' && val !== null) {
            this.modelInList = Array.isArray(val) ? val : [val];
        } else {
            this.modelInList = [];
        }
    }

    registerOnChange(fn: Function) {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function) {
        this.onModelTorched = fn;
    }

    ngAfterContentInit() {
        console.log(this.listOfOption);
        const labelValueMap: object = {};
        this.listOfOption.toArray().forEach(option => {
            labelValueMap[option.gtValue] = option.gtLabel;
        });
        this.labelValueMap = labelValueMap;
    }

    @HostListener('click')
    toggleOpen() {
        this.isOptionOpen = !this.isOptionOpen;
    }
}
