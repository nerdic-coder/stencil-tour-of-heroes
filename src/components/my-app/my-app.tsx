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

        <main>
          <stencil-router>
            <stencil-route url='/' component='app-heroes' exact={true}>
            </stencil-route>
          </stencil-router>
        </main>
        <app-messages></app-messages>
      </div>
    );
  }
}
