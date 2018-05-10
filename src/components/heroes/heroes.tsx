import { Component, State } from '@stencil/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  tag: 'app-heroes',
  styleUrl: 'heroes.css'
})
export class Heroes {

  private heroService: HeroService;
  @State() private heroes: Hero[];

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
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  render() {
    return (
<div class='app-heroes'>
  <h2>My Heroes</h2>
  <ul class="heroes">
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
