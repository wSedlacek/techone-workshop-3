import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApartmentItemDTO } from '@final/api-interfaces';

import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApartmentService } from '../../core';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private readonly apartments: ApartmentService) {}

  public search = new FormControl();

  /** List of all of apartments */
  public readonly apartments$ = this.apartments.getApartments();

  public readonly filteredApartments$ = combineLatest([
    this.apartments$,
    this.search.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([apartments, searchTerm]) =>
      apartments.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  );

  /** Starts the process to apply for a lease for a given apartment */
  public applyForLease(id: string): void {
    this.apartments.applyForLease(id);
  }

  /** Used by `*ngFor` to track apartments based on IDs to improve performance */
  public trackById(_i: number, { id }: ApartmentItemDTO): string {
    return id;
  }
}
