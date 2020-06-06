import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppService } from '../app.service';
import { District } from '../districts/district.model';
import { Street } from './street.model';

@Component({
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.scss'],
})
export class StreetsComponent {
  streets$: Observable<Street[]> = this.service.getStreets();
  districts$: Observable<District[]> = this.service.getDistricts();
  constructor(public service: AppService) {}

  findDistrict(id: number): Observable<District> {
    return this.districts$.pipe(
      map((districts) => districts.filter((district) => district.id === id)[0])
    );
  }
}
