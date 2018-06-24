import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-select-demo',
    templateUrl: './select-demo.component.html',
    styleUrls: ['./select-demo.component.less']
})
export class SelectDemoComponent implements OnInit {
    chosenOne = 'a';
    constructor() {
    }

    ngOnInit() {
    }

}
