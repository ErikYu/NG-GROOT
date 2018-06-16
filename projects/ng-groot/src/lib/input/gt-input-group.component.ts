import {
    Component,
    TemplateRef,
    Input,
    ElementRef,
    Renderer2,
} from '@angular/core';

@Component({
    selector: 'gt-input-group',
    template: `
        <span class="gt-input-group-before">
            <ng-container *ngIf="isBeforeString; else gtBeforeTmpl">{{ gtInputBefore }}</ng-container>
        </span>
        <ng-content></ng-content>
        <span class="gt-input-group-after">
            <ng-container *ngIf="isAfterString; else gtAfterTmpl">{{ gtInputAfter }}</ng-container>
        </span>
        <ng-template #gtBeforeTmpl>
            <ng-template [ngTemplateOutlet]="gtInputBefore"></ng-template>
        </ng-template>
        <ng-template #gtAfterTmpl>
            <ng-template [ngTemplateOutlet]="gtInputAfter"></ng-template>
        </ng-template>
    `
})
export class GtInputGroupComponent {
    private _before: string | TemplateRef<void>;
    private _after: string | TemplateRef<void>;
    isBeforeString: boolean;
    isAfterString: boolean;
    @Input()
    get gtInputBefore(): string | TemplateRef<void> {
        return this._before;
    }
    set gtInputBefore(val: string | TemplateRef<void>) {
        this._before = val;
        this.isBeforeString = !(val instanceof TemplateRef);
    }

    @Input()
    get gtInputAfter(): string | TemplateRef<void> {
        return this._after;
    }
    set gtInputAfter(val: string | TemplateRef<void>) {
        this._after = val;
        this.isAfterString = !(val instanceof TemplateRef);
    }

    constructor(
        private _elemRef: ElementRef,
        private _render: Renderer2,
    ) {
        _render.addClass(this._elemRef.nativeElement, 'gt-input-group');
    }
}
