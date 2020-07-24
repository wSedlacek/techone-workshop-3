import { Component } from '@angular/core';

import { ApartmentItemDTO } from '@final/api-interfaces';

import { ApartmentService } from '../../shared';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private readonly apartments: ApartmentService) {}

  public readonly apartments$ = this.apartments.getApartments();

  public applyForLease(id: string): void {
    this.apartments.applyForLease(id);
  }

  public trackById(_i: number, { id }: ApartmentItemDTO): string {
    return id;
  }
}
