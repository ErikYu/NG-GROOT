import {
    Component,
    TemplateRef,
    Input,
    Renderer2,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'gt-card',
    template: `
        <div class="gt-card-header">
            <ng-container *ngIf="isHeaderString; else cardHeaderTmpl">{{gtHeader}}</ng-container>
        </div>
        <div class="gt-card-content">
            <ng-content></ng-content>
        </div>
        <ng-template #cardHeaderTmpl>
            <ng-template [ngTemplateOutlet]="gtHeader"></ng-template>
        </ng-template>
    `
})
export class GtCardComponent {
    isHeaderString: boolean;
    private _header: string | TemplateRef<void>;
    private _prefixCls = 'gt-card';

    @Input()
    get gtHeader(): string | TemplateRef<void> {
        return this._header;
    }
    set gtHeader(val: string | TemplateRef<void>) {
        this.isHeaderString = !(val instanceof TemplateRef);
        this._header = val;
    }

    constructor(
        private _elemRef: ElementRef,
        private _render: Renderer2,
    ) {
        _render.addClass(this._elemRef.nativeElement, this._prefixCls);
    }
}
