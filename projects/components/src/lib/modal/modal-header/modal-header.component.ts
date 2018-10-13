import {Component, EventEmitter, Input, OnInit, AfterViewInit, Output, ViewChild} from '@angular/core';
// @dynamic
@Component({
    selector: 'ng-sm-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['../styles/styles.scss','./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('content') content: any;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            const content = this.content && this.content.nativeElement.innerText;
            if (!content) {
                this.content.nativeElement.innerHTML = '提示';
            }
        });
    }

    clickClose($event) {
        $event.stopPropagation();
        this.close.emit();
    }

}
