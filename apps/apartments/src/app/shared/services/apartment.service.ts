import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApartmentDetailsDTO, ApartmentListDTO } from '@final/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  constructor(private readonly http: HttpClient) {}

  public readonly apartments$ = this.http.get<ApartmentListDTO>(
    '/api/apartments'
  );

  public getApartment(id: string): Observable<ApartmentDetailsDTO> {
    return this.http.get<ApartmentDetailsDTO>(`/api/apartments/${id}`);
  }
}
