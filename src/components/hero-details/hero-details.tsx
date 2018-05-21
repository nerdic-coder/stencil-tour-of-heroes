import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  tag: 'app-hero-details',
  styleUrl: 'hero-details.css'
})
export class HeroDetails {

  private heroService: HeroService;
  @Prop() match: MatchResults;
  @Prop({ mutable: true }) private hero: Hero;

  constructor() {
    this.heroService = HeroService.Instance;
  }

  componentWillLoad() {
    this.getHero();
  }

  goBack(): void {
    window.history.back();
  }

  getHero() {
    this.heroService.getHero(parseInt(this.match.params.id))
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  handleChangeName(event) {
    this.hero = {
      id: this.hero.id,
      name: event.target.value
    };
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  render() {

    return (
<div class='app-hero-details'>
  {this.hero ? (
      <div>
      <h2>{ this.hero.name.toUpperCase() } Details</h2>
      <div><span>ids: </span>{this.hero.id}</div>
      <div>
        <label>name:
          <input type="text" value={this.hero.name} onInput={(event) => this.handleChangeName(event)} placeholder="name" />
        </label>
      </div>
      <button onClick={() => this.save()}>save</button>
      <button onClick={() => this.goBack()}>go back</button>
      </div>
    ) : (
      null
    )
  }
</div>
    );
  }

}
