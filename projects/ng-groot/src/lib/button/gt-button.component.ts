import {
    Component,
    Input,
    ElementRef,
    Renderer2,
} from '@angular/core';

import { GtModifyClassService } from '../aacore/service/modify-class.service';

type gtButtonType = 'primary' | 'default' | 'danger' | 'warning';
type gtButtonSize = 'small' | 'middle' | 'large';

@Component({
    selector: '[gt-button]',
    template: `
        <span #btnElem>
            <ng-content></ng-content>
        </span>
    `,
    providers: [GtModifyClassService]
})
export class GtButtonComponent {
    clsPrefix = 'gt-btn';
    elem: HTMLElement;
    classList: String[];
    private _type: gtButtonType;
    private _size: gtButtonSize;
    private _ghost: boolean;

    @Input()
    get gtType() {
        return this._type;
    }
    set gtType(val) {
        this._type = val;
        this._setClassList();
    }

    @Input()
    get gtSize() {
        return this._size;
    }
    set gtSize(val) {
        this._size = val;
        this._setClassList();
    }

    @Input()
    get gtGhost() {
        return this._ghost;
    }
    set gtGhost(val) {
        this._ghost = !!val;
        this._setClassList();
    }

    constructor(
        private _elemRef: ElementRef,
        private _render: Renderer2,
        private _modifyCls: GtModifyClassService,
    ) {
        this.elem = _elemRef.nativeElement;
        _render.addClass(this.elem, this.clsPrefix);
    }

    private _setClassList() {
        const classObj = {
            [`${this.clsPrefix}-${this.gtType}`]: this.gtType,
            [`${this.clsPrefix}-${this.gtSize}`]: this.gtSize,
            [`${this.clsPrefix}-ghost`]: this.gtGhost,
        };
        this._modifyCls.renderClassList(this.elem, classObj);
    }


}
