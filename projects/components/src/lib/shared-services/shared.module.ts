import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventBusService} from './eventBus';
import {ModalService} from './modal/';
import {StorageService} from './utils';


@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ModalService,
        EventBusService,
        StorageService,
    ],
})
export class SharedModule {
}
