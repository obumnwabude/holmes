import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { District } from './districts/district.model';
import { Street } from './streets/street.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getDistricts(): Observable<District[]> {
    return this.http
      .get<{ districts: District[] }>('api/v1/districts')
      .pipe(map((data) => data.districts));
  }

  getStreets(): Observable<Street[]> {
    return this.http
      .get<{ streets: Street[] }>('api/v1/streets')
      .pipe(map((data) => data.streets));
  }
}
