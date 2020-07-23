import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ApartmentListDTO } from '@final/api-interfaces';
import { Observable } from 'rxjs';
import { ApartmentService } from '../../shared';

@Injectable({ providedIn: 'root' })
export class ListResolver implements Resolve<ApartmentListDTO> {
  constructor(private readonly apartments: ApartmentService) {}

  @Override()
  public resolve(): Observable<ApartmentListDTO> {
    return this.apartments.getApartments();
  }
}
