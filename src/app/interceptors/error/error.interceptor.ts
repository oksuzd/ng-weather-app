import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatDialog } from "@angular/material/dialog";
import { ErrorWindowComponent } from "./error-window/error-window.component";
import { WeatherStoreService } from "../../weather/services/weather-store.service";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    public dialog: MatDialog,
    private weatherStoreService: WeatherStoreService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.ok === false) {
          if (err.error.target['requestMethod'] === 'GET') {
            this.dialog.open(
              ErrorWindowComponent,
              {
                width: '350px',
                disableClose: true,
                data: {
                  error: 'region',
                  message: 'The application does not work in some regions due to the policies of third-party API services.',
                  location: `${this.weatherStoreService.getLocationState().city}, 
                  ${this.weatherStoreService.getLocationState().country}`
                }
              });
          } else {
            this.dialog.open(
              ErrorWindowComponent,
              {
                width: '350px', data: {
                  error: 'extensions',
                  message: 'The application does not work correctly due to some browser extensions (Adblock, Ghostery, etc.).',
                }
              });
          }
        }
        return throwError(() => err);
      })
    );
  }
}
