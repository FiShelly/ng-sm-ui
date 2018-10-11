import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from './MenuItem';
import {Router} from '@angular/router';
// @dynamic
@Component({
    selector: 'ng-sm-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

    @Input() menuData: MenuItem[];
    @Output() menuSelect: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    clickHandle($e, item: MenuItem) {
        this.menuSelect.emit(item);
    }

}
