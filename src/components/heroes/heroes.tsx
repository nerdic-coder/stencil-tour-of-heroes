import { Component, State } from '@stencil/core';
import { Hero } from '../../models/hero';
import { HEROES } from './mock-heroes';

@Component({
  tag: 'app-heroes',
  styleUrl: 'heroes.css'
})
export class Heroes {

  @State() private selectedHero: Hero;

  private heroes: Hero[] = HEROES;

  handleChangeName(event) {
    this.selectedHero = {
      id: this.selectedHero.id,
      name: event.target.value
    };
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  render() {

    return (
<div class='app-heroes'>
  <h2>My Heroes</h2>
  <ul class="heroes">
    {this.heroes.map((hero) =>
      <li class={(this.selectedHero === hero ? 'selected' : '')} onClick={ () => this.onSelect(hero)}>
        <span class="badge">{hero.id}</span> {hero.name}
      </li>
      )}
  </ul>
  <app-hero-details hero={this.selectedHero}></app-hero-details>
</div>
    );
  }

}
