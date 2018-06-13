import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgGrootModule } from 'ng-groot';
import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        NgGrootModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
