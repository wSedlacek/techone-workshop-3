import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { ApartmentService } from '../shared';

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
}
