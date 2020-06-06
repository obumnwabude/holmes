import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppService } from '../app.service';
import { District } from './district.model';
import { Street } from '../streets/street.model';

@Component({
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss'],
})
export class DistrictsComponent {
  districts$: Observable<District[]> = this.service.getDistricts();
  streets$: Observable<Street[]> = this.service.getStreets();
  constructor(public service: AppService) {}

  findStreets(id: number): Observable<Street[]> {
    return this.streets$.pipe(
      map((streets) => streets.filter((street) => street.district_id === id))
    );
  }
}
