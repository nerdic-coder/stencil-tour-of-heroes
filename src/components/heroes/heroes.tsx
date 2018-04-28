import { Component, State } from '@stencil/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  tag: 'app-heroes',
  styleUrl: 'heroes.css'
})
export class Heroes {

  private messageService: MessageService;
  private heroService: HeroService;
  @State() private selectedHero: Hero;
  @State() private heroes: Hero[];

  constructor() {
    this.messageService = MessageService.Instance;
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

  onSelect(hero: Hero): void {
    this.messageService.add('Heroes: selected hero');
    this.selectedHero = hero;
  }

  render() {
    return (
<div class='app-heroes'>
  <h2>My Heroes</h2>
  <ul class="heroes">
    {this.heroes ? (this.heroes.map((hero) =>
      <li class={(this.selectedHero === hero ? 'selected' : '')} onClick={ () => this.onSelect(hero)}>
        <span class="badge">{hero.id}</span> {hero.name}
      </li>
      )) : (null)}
  </ul>
  <app-hero-details hero={this.selectedHero}></app-hero-details>
</div>
    );
  }

}
