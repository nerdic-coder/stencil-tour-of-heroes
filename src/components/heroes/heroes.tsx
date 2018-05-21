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
  @State() private hero: Hero;

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
    this.hero = { id: null, name: "" }
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  handleChangeName(event) {
    this.hero = {
      id: this.hero.id,
      name: event.target.value
    };
  }

  add(): void {
    this.hero.name = this.hero.name.trim();
    if (!this.hero.name) { return; }
    this.heroService.addHero(this.hero).subscribe(hero => {
      this.heroes.push(hero);
      this.hero = {
        id: this.hero.id,
        name: ""
      };
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
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
        <button class="delete" title="delete hero" onClick={() => this.delete(hero)}>x</button>
      </li>
      )) : (null)}
  </ul>
  <div>
    <label>Hero name:
      <input type="text" value={this.hero.name} onInput={(event) => this.handleChangeName(event)} placeholder="name" />
    </label>
    <button onClick={() => this.add()}>
      add
    </button>
  </div>
</div>
    );
  }

}
