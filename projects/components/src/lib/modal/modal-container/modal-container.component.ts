import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'ng-sm-modal-container',
    templateUrl: './modal-container.component.html',
    styleUrls: ['../styles/styles.scss', './modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
    @Input() isShow: boolean = false;
    @Input() zIndex: number = 9999;
    @ViewChild('modal') modal: any;
    constructor() {
    }

    ngOnInit() {
    }

}
