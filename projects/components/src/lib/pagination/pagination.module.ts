import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './pagination.component';
import {InputModule} from '../input';
import {LabelModule} from '../label';
import {ButtonModule} from '../button';
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
