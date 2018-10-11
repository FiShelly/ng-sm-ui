import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectOptionComponent} from './select-option.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SelectOptionComponent
    ],
    exports: [
        SelectOptionComponent
    ]
})

export class SelectOptionModule {
}
