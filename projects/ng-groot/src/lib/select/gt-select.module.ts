import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtSelectComponent } from './gt-select.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        GtSelectComponent,
    ],
    exports: [
        GtSelectComponent,
    ]
})
export class GtSelectModule {}
