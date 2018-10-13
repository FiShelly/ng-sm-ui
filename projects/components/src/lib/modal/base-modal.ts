import {Input, ViewChild} from '@angular/core';
import {ModalContainerComponent} from './modal-container/modal-container.component';

export class BaseModal {

    static $alias: string = '';
    @ViewChild(ModalContainerComponent) container: any;
    @Input() title: string;

    constructor() {
    }

    close() {
    }

    modalCreated(opt: any) {
    }
}
