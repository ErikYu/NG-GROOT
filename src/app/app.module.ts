import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgGrootModule} from 'ng-groot';
import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';
import {CardDemoComponent} from './card-demo/card-demo.component';
import {ButtonDemoComponent} from './button-demo/button-demo.component';
import {InputDemoComponent} from './input-demo/input-demo.component';
import { SelectDemoComponent } from './select-demo/select-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CardDemoComponent,
        ButtonDemoComponent,
        InputDemoComponent,
        SelectDemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgGrootModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
