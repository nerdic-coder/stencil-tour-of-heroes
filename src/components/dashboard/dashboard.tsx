import { Component, State } from '@stencil/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  tag: 'app-dashboard',
  styleUrl: 'dashboard.css'
})
export class Dashboard {

  private heroService: HeroService;
  @State() private heroes: Hero[];

  constructor() {
    this.heroService = HeroService.Instance;
  }

  componentWillLoad() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  render() {
    return (
<div class='app-dashboard'>
  <h2>Top Heroes</h2>
  <div class="grid grid-pad">
    {this.heroes ? (this.heroes.map((hero) =>
      <stencil-route-link url={`/detail/${hero.id}`} class="col-1-4">
        <div class="module hero">
          <h4>{hero.name}</h4>
        </div>
      </stencil-route-link>
      )) : (null)}
  </div>
  <app-hero-search></app-hero-search>
</div>
    );
  }

}
