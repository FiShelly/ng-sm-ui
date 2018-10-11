import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabViewComponent} from './tab-view.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabViewComponent
    ],
    exports: [
        TabViewComponent
    ]
})

export class TabViewModule {
}
