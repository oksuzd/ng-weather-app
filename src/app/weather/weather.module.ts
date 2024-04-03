import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { WeatherComponent } from './pages/weather/weather.component';
import { HttpClientModule } from "@angular/common/http";
import { DayWeatherComponent } from './components/day-weather/day-weather.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    WeatherComponent,
    DayWeatherComponent,
    CityListComponent,
    CitySearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  exports: [
    WeatherComponent
  ],
})
export class WeatherModule {}
