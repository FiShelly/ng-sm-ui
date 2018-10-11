import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioComponent} from './radio.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RadioComponent
  ],
  exports: [
    RadioComponent
  ]
})

export class RadioModule {
}
