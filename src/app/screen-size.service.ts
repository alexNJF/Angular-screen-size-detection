import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,

} from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private size$: Observable<boolean>;
  constructor(private breakpointObserver: BreakpointObserver) {

    this.size$ = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }

  get Size() {
    return this.size$;
  }
}
