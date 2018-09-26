import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
