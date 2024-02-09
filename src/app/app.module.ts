import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherModule } from "./weather/weather.module";
import { LoaderInterceptor } from "./interceptors/loader/loader.interceptor";

import { MatProgressBarModule } from "@angular/material/progress-bar";



const materialModules = [
  // MatButtonModule,
  // MatDialogModule,
  // MatInputModule,
  // MatCardModule,
  // MatSnackBarModule,
  // MatDividerModule,
  // MatAutocompleteModule,
  MatProgressBarModule,
  // MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeatherModule,
    ...materialModules,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
