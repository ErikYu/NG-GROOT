import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgGrootModule } from 'ng-groot';
import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CardDemoComponent,
        ButtonDemoComponent
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
