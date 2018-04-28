import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

export class HeroService {

  private static _instance: HeroService;

  private messageService: MessageService;

  constructor() {
    this.messageService = MessageService.Instance;
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  public static get Instance(): HeroService {
      // Do you need arguments? Make it a regular method instead.
      return this._instance || (this._instance = new this());
  }
}
