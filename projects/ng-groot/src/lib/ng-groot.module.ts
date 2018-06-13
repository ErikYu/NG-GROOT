import {NgModule} from '@angular/core';
import {NgGrootComponent} from './ng-groot.component';

import { GtButtonComponent } from './button/gt-button.component';

@NgModule({
    imports: [],
    declarations: [
        NgGrootComponent,
        GtButtonComponent,
    ],
    exports: [
        NgGrootComponent,
        GtButtonComponent,
    ]
})
export class NgGrootModule {
}
