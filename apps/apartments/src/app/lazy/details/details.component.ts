import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ApartmentService, convertToTable, TableData } from '../../shared';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly apartments: ApartmentService
  ) {}

  public readonly details$ = this.route.data.pipe(map((data) => data.details));

  public applyForLease(id: string): void {
    this.apartments.applyForLease(id);
  }

  public convertToTable(object: object): TableData[] {
    return convertToTable(object);
  }
}
