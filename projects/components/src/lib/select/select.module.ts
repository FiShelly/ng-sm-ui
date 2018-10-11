import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select.component';
import {FormsModule} from '@angular/forms';
import {InputModule} from '../input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule
  ],
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ]
})

export class SelectModule {
}
