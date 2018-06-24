import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtSelectComponent } from './gt-select.component';
import { GtOptionComponent } from './gt-option.component';
import { GtOptionContainerComponent } from './gt-option-container.component';
import { GtOptionItemComponent } from './gt-option-item.component';
import { GtSelectInputComponent } from './gt-select-input.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        GtSelectComponent,
        GtOptionComponent,
        GtOptionContainerComponent,
        GtOptionItemComponent,
        GtSelectInputComponent,
    ],
    exports: [
        GtSelectComponent,
        GtOptionComponent,
        GtOptionContainerComponent,
        GtOptionItemComponent,
        GtSelectInputComponent,
    ]
})
export class GtSelectModule {}
