import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from './button';
import {CheckboxModule} from './checkbox';
import {CheckboxGroupModule} from './checkbox-group';
import {DateTimePickerModule} from './date-time-picker';
import {InputModule} from './input';
import {LabelModule} from './label';
import {LeftMenuModule} from './left-menu';
import {LoadingModule} from './loading';
import {MarkDownModule} from './mark-down';
import {MaskModule} from './mask';
import {ModalModule} from './modal';
import {PaginationModule} from './pagination';
import {RadioModule} from './radio';
import {RadioGroupModule} from './radio-group';
import {SelectModule} from './select';
import {SelectOptionModule} from './select-option';
import {SharedModule} from './shared-services';
import {SwitchModule} from './switch';
import {TabViewModule} from './tab-view';
import {TableShownListModule} from './table-shown-list';
import {TabsModule} from './tabs';
import {TagModule} from './tag';
import {TextareaModule} from './textarea';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
  imports: [
    CommonModule,
    FormsModule
    // BrowserAnimationsModule,
    // RouterModule
  ],
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
    SharedModule,
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


