import {NgModule} from '@angular/core';

import { GtButtonModule } from './button/gt-button.module';
import { GtCardModule } from './card/gt-card.module';
import { GtInputModule } from './input/gt-input.module';
import { GtSelectModule } from './select/gt-select.module';

export * from './button';
export * from './card';
export * from './input';
export * from './select';

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    exports: [
        GtButtonModule,
        GtCardModule,
        GtInputModule,
        GtSelectModule,
    ]
})
export class NgGrootModule {
}
