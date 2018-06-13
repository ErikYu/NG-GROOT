import { Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class GtModifyClassService {
    constructor(private _render: Renderer2) {}

    private classObj: object;

    renderClassList(el: HTMLElement, classObj: object) {
        this.removeClass(el, this.classObj);

        // use classObj to save the current class list,
        // this val will be used to remove classes next time.
        this.classObj = {...classObj};
        this.addClass(el, this.classObj);
    }

    removeClass(el: HTMLElement, classObj: object) {
        for (const cls in classObj) {
            if (classObj.hasOwnProperty(cls)) {
                this._render.removeClass(el, cls);
            }
        }
    }

    addClass(el: HTMLElement, classObj: object) {
        for (const cls in classObj) {
            if (classObj.hasOwnProperty(cls) && !!classObj[cls]) {
                this._render.addClass(el, cls);
            }
        }
    }
}
