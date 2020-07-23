import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApartmentItemDTO } from '@final/api-interfaces';
import { map } from 'rxjs/operators';
import { ApartmentService } from '../../shared';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly apartments: ApartmentService
  ) {}

  public readonly apartments$ = this.route.data.pipe(
    map((data) => data.apartments)
  );

  public applyForLease(id: string): void {
    this.apartments.applyForLease(id);
  }

  public trackById(_i: number, { id }: ApartmentItemDTO): string {
    return id;
  }
}
