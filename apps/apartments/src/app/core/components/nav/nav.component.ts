import { Component, Input } from '@angular/core';

import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'final-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private readonly route: Router) {}

  @Input()
  public title: string;

  public readonly loading$ = this.route.events.pipe(
    filter(
      (event) =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
    ),
    map((event) => event instanceof NavigationStart)
  );
}
