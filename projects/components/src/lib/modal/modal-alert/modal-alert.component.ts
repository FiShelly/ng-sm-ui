import {Component, EventEmitter, Input, OnInit, Optional, Output, ViewChild} from '@angular/core';
import {BaseModal} from '../base-modal';
import {ModalContainerComponent} from '../modal-container/modal-container.component';
// @dynamic
@Component({
    selector: 'ng-sm-modal-alert',
    templateUrl: './modal-alert.component.html',
    styleUrls: ['../styles/styles.scss','./modal-alert.component.scss']
})
export class ModalAlertComponent extends BaseModal implements OnInit {
    static $alias: string = 'alert';
    text: string = '';

    @Output() okCallback: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        super();
    }

    ngOnInit() {
    }

    modalCreated(opts: any) {
        Object.keys(opts).forEach(val => {
            this[val] = opts[val];
        });
    }

    closeModal() {
        this.close();
        this.okCallback.emit();
    }
}
