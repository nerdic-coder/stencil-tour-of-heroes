import { Component, Prop } from '@stencil/core';
import { Hero } from '../../models/hero';

@Component({
  tag: 'app-hero-details',
  styleUrl: 'hero-details.css'
})
export class HeroDetails {

  @Prop({ mutable: true }) private hero: Hero;

  handleChangeName(event) {
    this.hero = {
      id: this.hero.id,
      name: event.target.value
    };
  }

  render() {

    return (
<div class='app-heroes'>
  {this.hero ? (
      <div>
      <h2>{ this.hero.name.toUpperCase() } Details</h2>
      <div><span>ids: </span>{this.hero.id}</div>
      <div>
        <label>name:
          <input type="text" value={this.hero.name} onInput={(event) => this.handleChangeName(event)} placeholder="name" />
        </label>
      </div>
      </div>
    ) : (
      null
    )
  }
</div>
    );
  }

}
