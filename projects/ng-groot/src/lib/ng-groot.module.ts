import {NgModule} from '@angular/core';

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
    ],
    exports: [
        GtButtonModule,
        GtCardModule,
        GtInputModule,
    ]
})
export class NgGrootModule {
}
