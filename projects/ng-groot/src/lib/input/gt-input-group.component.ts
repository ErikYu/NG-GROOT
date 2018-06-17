import {
    Component,
    TemplateRef,
    Input,
    ElementRef,
    Renderer2,
    HostBinding,
    ContentChildren,
    QueryList,
    AfterContentInit,
} from '@angular/core';
import { GtInputDirective } from './gt-input.directive';

@Component({
    selector: 'gt-input-group',
    template: `
        <!--<span class="gt-input-group">-->
            <span class="gt-input-group-before" *ngIf="hasBefore">
                <ng-container *ngIf="isBeforeString; else gtBeforeTmpl">{{ gtInputBefore }}</ng-container>
            </span>
            <ng-content></ng-content>
            <span class="gt-input-group-after" *ngIf="hasAfter">
                <ng-container *ngIf="isAfterString; else gtAfterTmpl">{{ gtInputAfter }}</ng-container>
            </span>
        <!--</span>-->
        <ng-template #gtBeforeTmpl>
            <ng-template [ngTemplateOutlet]="gtInputBefore"></ng-template>
        </ng-template>
        <ng-template #gtAfterTmpl>
            <ng-template [ngTemplateOutlet]="gtInputAfter"></ng-template>
        </ng-template>
    `
})
export class GtInputGroupComponent implements AfterContentInit {
    private _before: string | TemplateRef<void>;
    private _after: string | TemplateRef<void>;
    isBeforeString: boolean;
    isAfterString: boolean;
    hasBefore: boolean;
    hasAfter: boolean;
    private _prefixCls = 'gt-input-group';
    @ContentChildren(GtInputDirective) gtInputList: QueryList<GtInputDirective>;
    @Input()
    get gtInputBefore(): string | TemplateRef<void> {
        return this._before;
    }
    set gtInputBefore(val: string | TemplateRef<void>) {
        this._before = val;
        this.isBeforeString = !(val instanceof TemplateRef);
        this.hasBefore = !!val;
    }

    @Input()
    get gtInputAfter(): string | TemplateRef<void> {
        return this._after;
    }
    set gtInputAfter(val: string | TemplateRef<void>) {
        this._after = val;
        this.isAfterString = !(val instanceof TemplateRef);
        this.hasAfter = !!val;
    }

    @HostBinding('class.gt-input-group-has-before')
    get groupHasBefore() {
        return this.hasBefore;
    }

    @HostBinding('class.gt-input-group-has-after')
    get groupHasAfter() {
        return this.hasAfter;
    }

    private updateGroupType() {
        for (const item of this.gtInputList.toArray()) {
            this._render.addClass(this._elemRef.nativeElement, `${this._prefixCls}-${item.gtType}`);
        }
    }

    constructor(
        private _elemRef: ElementRef,
        private _render: Renderer2,
    ) {
        _render.addClass(this._elemRef.nativeElement, `${this._prefixCls}`);
    }

    ngAfterContentInit() {
        this.updateGroupType();
    }
}
