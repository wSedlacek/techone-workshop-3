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
    private readonly service: ApartmentService
  ) {}

  public readonly details$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) => this.service.getApartment(id))
  );

  public convertToTable(object: object): TableData[] {
    return Object.entries(object)
      .filter(([key]) => key !== 'id')
      .map(([item, cost]) => ({
        item,
        cost,
      }));
  }

  public applyForLease(id: string): void {
    this.service.applyForLease(id);
  }
}
