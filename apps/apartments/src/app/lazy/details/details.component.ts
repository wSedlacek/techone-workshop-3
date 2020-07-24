import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { ApartmentService } from '../../core';
import { convertToTable, TableData } from '../../utils';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly apartments: ApartmentService
  ) {}

  /** The details of the currently selected apartment */
  public readonly details$ = this.route.data.pipe(map((data) => data.details));

  /** Starts the process to apply for a lease for a given apartment */
  public applyForLease(id: string): void {
    this.apartments.applyForLease(id);
  }

  /** Converts an object into a format Angular Material's Table can understand */
  public convertToTable(object: object): TableData[] {
    return convertToTable(object);
  }
}
