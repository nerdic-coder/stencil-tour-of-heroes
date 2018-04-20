import { Component, State } from '@stencil/core';
import { Hero } from '../../models/hero';

@Component({
  tag: 'app-heroes',
  styleUrl: 'heroes.css'
})
export class Heroes {

  @State() private hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };

  handleChangeName(event) {
    this.hero = {
      id: this.hero.id,
      name: event.target.value
    };
  }

  render() {
    return (
<div class='app-heroes'>
  <h2>{ this.hero.name.toUpperCase() } Details</h2>
  <div><span>id: </span>{this.hero.id}</div>
  <div>
    <label>name:
      <input type="text" value={this.hero.name} onInput={(event) => this.handleChangeName(event)} placeholder="name" />
    </label>
  </div>
</div>
    );
  }

}
