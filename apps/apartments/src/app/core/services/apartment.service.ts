import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { concatMap, map, mergeMap, scan } from 'rxjs/operators';

import { ApartmentDetailsDTO, ApartmentListDTO } from '@final/api-interfaces';
import { chunk } from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches a list of apartment's `name` and `id`.
   */
  public getApartments(): Observable<ApartmentDetailsDTO[]> {
    return this.http.get<ApartmentListDTO>('/api/apartments').pipe(
      mergeMap((apartments) => chunk(apartments, 3)),
      concatMap((apartmentChunk) =>
        timer(2000).pipe(map(() => apartmentChunk))
      ),
      mergeMap((apartmentChunk) => apartmentChunk),
      concatMap(({ id }) => this.getApartment(id)),
      scan((prev, next) => [...prev, next], [] as ApartmentDetailsDTO[])
    );
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
