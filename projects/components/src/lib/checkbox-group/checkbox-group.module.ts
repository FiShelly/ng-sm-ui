import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxGroupComponent} from './checkbox-group.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CheckboxGroupComponent
    ],
    exports: [
        CheckboxGroupComponent
    ]
})

export class CheckboxGroupModule {
}
