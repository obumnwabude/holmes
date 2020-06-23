import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { AppService } from '../app.service';
import { District } from './district.model';
import { Street } from '../streets/street.model';

@Component({
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss'],
})
export class DistrictsComponent {
  streets: Street[];
  districts$: Observable<District[]> = this.service.getDistricts();
  streets$: Observable<Street[]> = this.service.getStreets();

  constructor(public service: AppService) {
    this.streets$
      .pipe(take(1))
      .subscribe((streets) => (this.streets = streets));
  }

  findStreets(id: number): Street[] {
    return this.streets.filter((street) => street.district_id == id);
  }
}
