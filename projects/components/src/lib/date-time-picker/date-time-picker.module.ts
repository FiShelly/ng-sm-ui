import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateTimePickerComponent} from './date-time-picker.component';
import {FormsModule} from '@angular/forms';
import {InputModule} from '../input';
import {LabelModule} from '../label';
import {ButtonModule} from '../button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputModule,
        LabelModule,
        ButtonModule
    ],
    declarations: [
        DateTimePickerComponent
    ],
    exports: [
        DateTimePickerComponent
    ]
})

export class DateTimePickerModule {
}
