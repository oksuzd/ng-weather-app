import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from "./interceptors/loader/loader.service";
import { catchError, Subject, takeUntil, throwError } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ng-weather-app';
  isLoad = false;
  private notifier$: Subject<null> = new Subject();

  constructor(
    public loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loaderService.isLoad$
      .pipe(
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
        .subscribe((res) => {
          this.isLoad = res;
          this.cdr.detectChanges();
        });
    }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }
}
