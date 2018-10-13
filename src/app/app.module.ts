import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgSmUiModule} from '../../projects/components/src/lib/ng-sm-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSmUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
