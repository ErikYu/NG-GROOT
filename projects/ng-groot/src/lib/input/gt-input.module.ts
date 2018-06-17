import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtInputDirective } from './gt-input.directive';
import { GtInputGroupComponent } from './gt-input-group.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        GtInputDirective,
        GtInputGroupComponent,
    ],
    exports: [
        GtInputDirective,
        GtInputGroupComponent,
    ]
})
export class GtInputModule {}
