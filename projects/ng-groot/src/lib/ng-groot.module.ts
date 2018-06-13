import {NgModule} from '@angular/core';
import {NgGrootComponent} from './ng-groot.component';

import { GtButtonModule } from './button/gt-button.module';
import { GtCardModule } from './card/gt-card.module';

export * from './button';
export * from './card';

@NgModule({
    imports: [
    ],
    declarations: [
        NgGrootComponent,
    ],
    exports: [
        GtButtonModule,
        GtCardModule,
    ]
})
export class NgGrootModule {
}
