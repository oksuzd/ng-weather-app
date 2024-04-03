import { Component } from '@angular/core';
import { WeatherStoreService } from "../../../weather/services/weather-store.service";
import { WeatherLocation } from "../../../weather/models/weather-widget.models";

@Component({
  selector: 'app-error-window',
  templateUrl: './error-window.component.html',
  styleUrls: ['./error-window.component.scss']
})
export class ErrorWindowComponent {

  location: WeatherLocation = this.weatherStoreService.getLocationState();

  constructor(private weatherStoreService: WeatherStoreService) {}
}
