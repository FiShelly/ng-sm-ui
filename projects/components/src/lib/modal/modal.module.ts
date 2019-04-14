import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalAlertComponent} from './modal-alert/modal-alert.component';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import {ModalFooterComponent} from './modal-footer/modal-footer.component';
import {ModalHeaderComponent} from './modal-header/modal-header.component';
import {ModalPromptComponent} from './modal-prompt/modal-prompt.component';
import {InputModule} from '../input/input.module';
import {LabelModule} from '../label/label.module';
import {ButtonModule} from '../button/button.module';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from '../pagination/pagination.module';
import {LoadingModule} from '../loading/loading.module';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {MaskModule} from '../mask/mask.module';
import {ModalContainerComponent} from './modal-container/modal-container.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputModule,
        LabelModule,
        ButtonModule,
        PaginationModule,
        LoadingModule,
        CheckboxModule,
        MaskModule
    ],
    declarations: [
        ModalAlertComponent,
        ModalConfirmComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalPromptComponent,
        ModalContainerComponent
    ],
    exports: [
        ModalAlertComponent,
        ModalConfirmComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalPromptComponent,
        ModalContainerComponent
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalConfirmComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalPromptComponent,
        ModalContainerComponent
    ]
})

export class ModalModule {
}
