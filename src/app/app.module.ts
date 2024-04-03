import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherModule } from "./weather/weather.module";
import { LoaderInterceptor } from "./interceptors/loader/loader.interceptor";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ErrorInterceptor } from "./interceptors/error/error.interceptor";
import { ErrorWindowComponent } from './interceptors/error/error-window/error-window.component';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    ErrorWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeatherModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
