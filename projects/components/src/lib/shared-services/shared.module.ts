import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventBusService} from './eventBus';
import {ModalService} from './modal/';
import {StorageService} from './utils';
import {MaterialService} from './model';


@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ModalService,
        EventBusService,
        MaterialService,
        StorageService,
    ],
})
export class SharedModule {
}
