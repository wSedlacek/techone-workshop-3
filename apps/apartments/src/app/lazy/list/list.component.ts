import { Component } from '@angular/core';

import { ApartmentItemDTO } from '@final/api-interfaces';

import { ApartmentService } from '../../core';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private readonly apartments: ApartmentService) {}

  /** List of all of apartments */
  public readonly apartments$ = this.apartments.getApartments();

  /** Starts the process to apply for a lease for a given apartment */
  public applyForLease(id: string): void {
    this.apartments.applyForLease(id);
  }

  /** Used by `*ngFor` to track apartments based on IDs to improve performance */
  public trackById(_i: number, { id }: ApartmentItemDTO): string {
    return id;
  }
}
