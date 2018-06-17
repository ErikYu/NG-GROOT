import {
    Directive,
    Input,
    Renderer2,
    ElementRef,
} from '@angular/core';
import { GtModifyClassService } from '../aacore/service/modify-class.service';

export type GtInputSize = 'small' | 'middle' | 'large';
export type GtInputType = 'primary' | 'success' | 'warning' | 'danger' | 'default';

@Directive({
    selector: '[gt-input]',
    providers: [GtModifyClassService]
})
export class GtInputDirective {
    _prefixCls = 'gt-input';
    private _size;
    private _type: GtInputType = 'default';
    _el: HTMLElement;
    @Input()
    get gtSize(): GtInputSize {
        return this._size;
    }
    set gtSize(val: GtInputSize) {
        this._size = val;
        this.setClassMap();
    }

    @Input()
    get gtType(): GtInputType {
        return this._type;
    }
    set gtType(val: GtInputType) {
        this._type = val;
        this.setClassMap();
    }

    private setClassMap() {
        const classMap: object = {
            [`${this._prefixCls}-${this.gtType}`]: this.gtType,
            [`${this._prefixCls}-${this.gtSize}`]: this.gtSize,
        };
        this._modifyCls.renderClassList(this._el, classMap);
    }
    constructor(
        private _elemRef: ElementRef,
        private _render: Renderer2,
        private _modifyCls: GtModifyClassService,
    ) {
        this._el = _elemRef.nativeElement;
        _render.addClass(this._el, this._prefixCls);
    }
}
