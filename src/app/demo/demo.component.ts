import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {
    type = 'danger';
    constructor() {
    }
    toggleType() {
        this.type = 'success';
    }
    ngOnInit() {
    }

}
