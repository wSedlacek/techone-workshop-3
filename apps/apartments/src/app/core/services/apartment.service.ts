import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApartmentDetailsDTO, ApartmentListDTO } from '@final/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches a list of apartment's `name` and `id`.
   */
  public getApartments(): Observable<ApartmentListDTO> {
    return this.http.get<ApartmentListDTO>('/api/apartments');
  }

  /**
   * Fetches all the details for a given apartment.
   * @param id The ID of the apartment to fetch the details for.
   */
  public getApartment(id: string): Observable<ApartmentDetailsDTO> {
    return this.http.get<ApartmentDetailsDTO>(`/api/apartments/${id}`);
  }

  /**
   * Not implemented, simply throws an alert at this time.
   * @param _id currently unused
   */
  public applyForLease(_id: string): void {
    alert('Not Implemented');
  }
}
