import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './pagination.component';
import {InputModule} from '../input/input.module';
import {LabelModule} from '../label/label.module';
import {ButtonModule} from '../button/button.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputModule,
        LabelModule,
        ButtonModule
    ],
    declarations: [
        PaginationComponent
    ],
    exports: [
        PaginationComponent
    ]
})

export class PaginationModule {
}
