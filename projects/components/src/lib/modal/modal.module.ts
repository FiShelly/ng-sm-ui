import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalAlertComponent} from './modal-alert/modal-alert.component';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import {ModalFooterComponent} from './modal-footer/modal-footer.component';
import {ModalHeaderComponent} from './modal-header/modal-header.component';
import {ModalPromptComponent} from './modal-prompt/modal-prompt.component';
import {ModalImageSelectComponent} from './modal-image-select/modal-image-select.component';
import {InputModule} from '../input';
import {LabelModule} from '../label';
import {ButtonModule} from '../button';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from '../pagination';
import {LoadingModule} from '../loading';
import {CheckboxModule} from '../checkbox';
import {MaskModule} from '../mask';
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
        ModalImageSelectComponent,
        ModalContainerComponent
    ],
    exports: [
        ModalAlertComponent,
        ModalConfirmComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalPromptComponent,
        ModalImageSelectComponent,
        ModalContainerComponent
    ],
    entryComponents: [
        ModalAlertComponent,
        ModalConfirmComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalPromptComponent,
        ModalImageSelectComponent,
        ModalContainerComponent
    ]
})

export class ModalModule {
}
