import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-demo',
    templateUrl: './input-demo.component.html',
    styleUrls: ['./input-demo.component.less']
})
export class InputDemoComponent implements OnInit {

    vals = 'this is value';
    holder = 'hnn';

    constructor() {
    }

    ngOnInit() {
    }

}
