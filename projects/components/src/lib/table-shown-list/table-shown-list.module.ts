import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableShownListComponent} from './table-shown-list.component';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule
    ],
    declarations: [
        TableShownListComponent
    ],
    exports: [
        TableShownListComponent
    ]
})

export class TableShownListModule {
}
