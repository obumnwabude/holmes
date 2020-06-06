import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { District } from './districts/district.model';
import { Street } from './streets/street.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  districts: District[] = [
    { id: 1, name: 'Ilechukwu' },
    { id: 2, name: 'Osonwa' },
    { id: 3, name: 'Downtown' },
    { id: 4, name: 'Ikegwuonu' },
  ];

  streets: Street[] = [
    { id: 1, name: 'Udoji', district_id: 1, houses: 5 },
    { id: 2, name: 'Umunkwuejim', district_id: 1, houses: 5 },
    { id: 3, name: 'Anyijiofor', district_id: 1, houses: 5 },
    { id: 4, name: 'Obikwulu', district_id: 1, houses: 5 },
    { id: 5, name: 'Okafor', district_id: 2, houses: 5 },
    { id: 6, name: 'Nwosu', district_id: 2, houses: 5 },
    { id: 7, name: 'Obiegbunam', district_id: 2, houses: 5 },
    { id: 8, name: 'Onyeaso', district_id: 2, houses: 5 },
    { id: 9, name: 'Nweke', district_id: 3, houses: 5 },
    { id: 10, name: 'Nwalo', district_id: 3, houses: 5 },
    { id: 11, name: 'Achugonye', district_id: 3, houses: 5 },
    { id: 12, name: 'Enyiokafor', district_id: 3, houses: 5 },
    { id: 13, name: 'Enemuo', district_id: 4, houses: 5 },
    { id: 14, name: 'Ogbodo', district_id: 4, houses: 5 },
    { id: 15, name: 'Anozie', district_id: 4, houses: 5 },
    { id: 16, name: 'Adindu', district_id: 4, houses: 5 },
  ];

  constructor() {}

  getDistricts(): Observable<District[]> {
    return of(this.districts);
  }

  getStreets(): Observable<Street[]> {
    return of(this.streets);
  }
}
