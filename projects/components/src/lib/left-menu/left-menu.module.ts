import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftMenuComponent} from './left-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        LeftMenuComponent
    ],
    exports: [
        LeftMenuComponent
    ]
})

export class LeftMenuModule {
}
