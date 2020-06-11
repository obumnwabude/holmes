import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { AppService } from '../app.service';
import { District } from '../districts/district.model';
import { Street } from './street.model';

@Component({
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.scss'],
})
export class StreetsComponent {
  districts: District[];
  streets$: Observable<Street[]> = this.service.getStreets();
  districts$: Observable<District[]> = this.service.getDistricts();

  constructor(public service: AppService) {
    this.districts$
      .pipe(take(1))
      .subscribe((districts) => (this.districts = districts));
  }

  findDistrict(id: number): District {
    return this.districts.filter((district) => district.id == id)[0];
  }
}
