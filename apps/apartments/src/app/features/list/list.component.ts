import { Component, OnInit } from '@angular/core';

import { ApartmentItemDTO } from '@final/api-interfaces';
import { ApartmentService } from '../../shared';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private readonly service: ApartmentService) {}

  public readonly apartments$ = this.service.getApartments();

  @Override()
  public ngOnInit(): void {}

  public applyForLease(id: string): void {
    this.service.applyForLease(id);
  }

  public trackById(_i: number, { id }: ApartmentItemDTO): string {
    return id;
  }
}
