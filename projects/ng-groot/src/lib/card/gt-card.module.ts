import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtCardComponent } from './gt-card.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        GtCardComponent,
    ],
    exports: [
        GtCardComponent,
    ]
})
export class GtCardModule {}
