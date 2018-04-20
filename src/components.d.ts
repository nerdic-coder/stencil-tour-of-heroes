/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';


declare global {

  namespace StencilComponents {
    interface AppHeroes {

    }
  }

  interface HTMLAppHeroesElement extends StencilComponents.AppHeroes, HTMLStencilElement {}

  var HTMLAppHeroesElement: {
    prototype: HTMLAppHeroesElement;
    new (): HTMLAppHeroesElement;
  };
  interface HTMLElementTagNameMap {
    'app-heroes': HTMLAppHeroesElement;
  }
  interface ElementTagNameMap {
    'app-heroes': HTMLAppHeroesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-heroes': JSXElements.AppHeroesAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHeroesAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
