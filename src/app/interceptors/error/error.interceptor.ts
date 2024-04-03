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


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public dialog: MatDialog) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.ok === false) {
          this.dialog.open(ErrorWindowComponent, {width: '350px', disableClose: true});
        }
        return throwError(() => err);
      })
    );
  }
}
