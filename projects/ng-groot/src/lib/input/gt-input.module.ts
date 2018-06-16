import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgInputDirective } from './gt-input.directive';
import { GtInputGroupComponent } from './gt-input-group.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NgInputDirective,
        GtInputGroupComponent,
    ],
    exports: [
        NgInputDirective,
        GtInputGroupComponent,
    ]
})
export class GtInputModule {}
