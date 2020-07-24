import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ApartmentDetailsDTO } from '@final/api-interfaces';
import { Observable } from 'rxjs';

import { ApartmentService } from '../../core';

@Injectable({ providedIn: 'root' })
export class DetailsResolver implements Resolve<ApartmentDetailsDTO> {
  constructor(private readonly apartments: ApartmentService) {}

  @Override()
  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ApartmentDetailsDTO> {
    const id = route.paramMap.get('id');

    return this.apartments.getApartment(id);
  }
}
