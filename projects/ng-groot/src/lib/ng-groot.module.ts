import {NgModule} from '@angular/core';
import {NgGrootComponent} from './ng-groot.component';

import { GtButtonModule } from './button/gt-button.module';
import { GtCardModule } from './card/gt-card.module';
import { GtInputModule } from './input/gt-input.module';

export * from './button';
export * from './card';
export * from './input';

@NgModule({
    imports: [
    ],
    declarations: [
        NgGrootComponent,
    ],
    exports: [
        GtButtonModule,
        GtCardModule,
        GtInputModule,
    ]
})
export class NgGrootModule {
}
