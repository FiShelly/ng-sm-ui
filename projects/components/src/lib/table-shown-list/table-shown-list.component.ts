import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {validator} from '../shared-services/utils/normal';
import {DomSanitizer} from '@angular/platform-browser';
// @dynamic
@Component({
    selector: 'ng-sm-table-shown-list',
    templateUrl: './table-shown-list.component.html',
    styleUrls: ['./table-shown-list.component.scss']
})
export class TableShownListComponent implements OnInit {

    @Input() format: object = {};
    @Input() operations: any = {};
    @Input() width: string = '1000';
    @Input() minHeight: string = '418';
    @Input() checkable: boolean = false;
    @Input() tableBorder: boolean = false;
    @Input() tdBorder: boolean = false;
    @Input() dataList: any[] = [];

    @Output() op: EventEmitter<any> = new EventEmitter<any>();


    constructor(
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {
    }

    opClick($e, item, k) {
        if ('disable' in k && (k.disable.includes(item.status) || k.disable.includes('all'))) {
            return;
        }
        $e.stopPropagation();
        this.op.emit({
            item: item,
            op: k.name
        });
    }

    getText(text, isForce) {
        if (!isForce) {
            return text;
        }
        if (!validator.hasHtml(text)) {
            text = `<span>${text}</span>`;
        }
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    isDisable (item, op) {
        if (!op.disable) {
            return false;
        } else if (op.disable.includes('all') || op.disable.includes(item.status)) {
            return true;
        }
        return false;
    }
}
