import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

// @dynamic
@Component({
    selector: 'ng-sm-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() icon: String = '';
    @Input() type: String = 'normal';
    @Input() text: String = '';
    @Input() theme: String = 'default';
    @Input() disabled: Boolean = false;
    @Input() loading: Boolean = false;
    @Input() plain: Boolean = false;
    @Input() round: Boolean = false;
    @Input() circle: Boolean = false;
    @Input() multiple: Boolean = false;
    @Output() btnClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() filesChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    clickEventHandle($e) {
        $e.stopPropagation();
        this.btnClick.emit($e);
    }

    changeEventHandle($e) {
        $e.stopPropagation();
        this.filesChange.emit($e.target.files);
    }
}
