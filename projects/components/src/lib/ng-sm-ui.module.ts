import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
import {ButtonModule} from './button/button.module';
import {CheckboxModule} from './checkbox/checkbox.module';
import {CheckboxGroupModule} from './checkbox-group/checkbox-group.module';
import {DateTimePickerModule} from './date-time-picker/date-time-picker.module';
import {InputModule} from './input/input.module';
import {LabelModule} from './label/label.module';
import {LeftMenuModule} from './left-menu/left-menu.module';
import {LoadingModule} from './loading/loading.module';
import {MarkDownModule} from './mark-down/mark-down.module';
import {MaskModule} from './mask/mask.module';
import {ModalModule} from './modal/modal.module';
import {PaginationModule} from './pagination/pagination.module';
import {RadioModule} from './radio/radio.module';
import {RadioGroupModule} from './radio-group/radio-group.module';
import {SelectModule} from './select/select.module';
import {SelectOptionModule} from './select-option/select-option.module';
// import {SharedModule} from './shared-services/shared.module';
import {SwitchModule} from './switch/switch.module';
import {TabViewModule} from './tab-view/tab-view.module';
import {TableShownListModule} from './table-shown-list/table-shown-list.module';
import {TabsModule} from './tabs/tabs.module';
import {TagModule} from './tag/tag.module';
import {TextareaModule} from './textarea/textarea.module';

export * from './button';
export * from './checkbox';
export * from './checkbox-group';
export * from './date-time-picker';
export * from './input';
export * from './label';
export * from './left-menu';
export * from './loading';
export * from './mark-down';
export * from './mask';
export * from './modal';
export * from './pagination';
export * from './radio';
export * from './radio-group';
export * from './select';
export * from './select-option';
export * from './shared-services';
export * from './switch';
export * from './tab-view';
export * from './table-shown-list';
export * from './tabs';
export * from './tag';
export * from './textarea';
export * from './version';

@NgModule({
    exports: [
        ButtonModule,
        CheckboxModule,
        CheckboxGroupModule,
        DateTimePickerModule,
        InputModule,
        LabelModule,
        LeftMenuModule,
        LoadingModule,
        MarkDownModule,
        MaskModule,
        ModalModule,
        PaginationModule,
        RadioModule,
        RadioGroupModule,
        SelectModule,
        SelectOptionModule,
        // SharedModule,
        SwitchModule,
        TabViewModule,
        TableShownListModule,
        TabsModule,
        TagModule,
        TextareaModule
    ]
})
export class NgSmUiModule {
}


