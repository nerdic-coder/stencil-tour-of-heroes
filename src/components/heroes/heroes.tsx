import { Component } from '@stencil/core';
import { Hero } from '../../models/hero';

@Component({
  tag: 'app-heroes',
  styleUrl: 'heroes.css'
})
export class Heroes {

  private hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };

  render() {
    return (
<div class='app-heroes'>
  <h2>{ this.hero.name.toUpperCase() } Details</h2>
  <div><span>id: </span>{this.hero.id}</div>
  <div><span>name: </span>{this.hero.name}</div>
</div>
    );
  }

}
