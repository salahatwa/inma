import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { Config } from './shared/classes/config';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { TranslationModule } from './translation.module';
import { DatePipe } from '@angular/common';
import { LayoutComponent } from './main/layout.component';
import { SharedModule } from './shared/modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// npm install --save notyf
// ng serve -prod
@NgModule({
  declarations: [
    AppComponent,LayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgProgressModule,
    MainModule,
    AppRoutingModule,
    TranslationModule,
    SharedModule
  ],
  providers: [Title, Config, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
