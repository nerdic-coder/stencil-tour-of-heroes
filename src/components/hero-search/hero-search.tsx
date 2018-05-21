import { Component, State } from '@stencil/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  tag: 'app-hero-search',
  styleUrl: 'hero-search.css'
})
export class HeroeSearch {

  private heroService: HeroService;

  heroes$: Observable<Hero[]>;
  @State() private heroes: Hero[];
  private searchTerms = new Subject<string>();

  constructor() {
    this.heroService = HeroService.Instance;
  }

  /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   *
   * Will only be called once
   */
  componentWillLoad() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
    this.heroes$
      .subscribe(heroes => this.heroes = heroes);
  }

  // Push a search term into the observable stream.
  search(event): void {
    this.searchTerms.next(event.target.value);
  }

  render() {
    return (
<div class='app-hero-search' id="search-component">
  <h4>Hero Search</h4>

  <input type="text" id="search-box" onKeyUp={(event) => this.search(event)} />

  <ul class="search-result">
    {this.heroes ? (this.heroes.map((hero) =>
      <li>
        <stencil-route-link url={`/detail/${hero.id}`}>
          <span class="badge">{hero.id}</span> {hero.name}
        </stencil-route-link>
      </li>
      )) : (null)}
  </ul>
</div>
    );
  }

}
