import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApartmentListDTO } from '@final/api-interfaces';

@Component({
  selector: 'final-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly http: HttpClient) {}
  public readonly apartments$ = this.http.get<ApartmentListDTO>(
    '/api/apartments'
  );
}
