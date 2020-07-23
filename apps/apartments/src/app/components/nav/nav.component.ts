import { Component, Input } from '@angular/core';

@Component({
  selector: 'final-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input()
  public title: string;
}
