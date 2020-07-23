import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { ApartmentService } from '../../shared';

interface TableData {
  item: string;
  cost: any;
}

@Component({
  selector: 'final-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly apartments: ApartmentService
  ) {}

  public readonly details$ = this.route.data.pipe(map((data) => data.details));

  public convertToTable(object: object): TableData[] {
    return Object.entries(object)
      .filter(([key]) => key !== 'id')
      .map(([item, cost]) => ({
        item,
        cost,
      }));
  }

  public applyForLease(id: string): void {
    this.apartments.applyForLease(id);
  }
}
