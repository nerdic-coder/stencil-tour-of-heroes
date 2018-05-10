import { Component } from '@stencil/core';
import {  } from '@stencil/router';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  private title: string = 'Tour of Heroes';

  render() {
    return (
      <div>
        <header>
          <h1>{this.title}</h1>
        </header>

        <nav>
          <stencil-route-link url="/dashboard">Dashboard</stencil-route-link>
          <stencil-route-link url="/heroes">Heroes</stencil-route-link>
        </nav>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-dashboard' exact={true}>
            </stencil-route>
            <stencil-route url='/dashboard' component='app-dashboard' exact={true}>
            </stencil-route>
            <stencil-route url='/heroes' component='app-heroes' exact={true}>
            </stencil-route>
            <stencil-route url='/detail/:id' component='app-hero-details' exact={true}>
            </stencil-route>
          </stencil-router>
        </main>
        <app-messages></app-messages>
      </div>
    );
  }
}
