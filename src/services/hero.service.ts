import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';

export class HeroService {

  private static _instance: HeroService;

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  public static get Instance(): HeroService {
      // Do you need arguments? Make it a regular method instead.
      return this._instance || (this._instance = new this());
  }
}
