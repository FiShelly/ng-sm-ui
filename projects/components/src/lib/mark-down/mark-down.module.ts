import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkDownComponent} from './mark-down.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MarkDownComponent
    ],
    exports: [
        MarkDownComponent
    ]
})

export class MarkDownModule {
}
