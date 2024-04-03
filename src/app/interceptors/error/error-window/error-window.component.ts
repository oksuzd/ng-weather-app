import { Component, Inject } from '@angular/core';
import { WeatherStoreService } from "../../../weather/services/weather-store.service";
import { WeatherLocation } from "../../../weather/models/weather-widget.models";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ErrorMessage } from "../models/error.models";

@Component({
  selector: 'app-error-window',
  templateUrl: './error-window.component.html',
  styleUrls: ['./error-window.component.scss']
})
export class ErrorWindowComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrorWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorMessage,

  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}
