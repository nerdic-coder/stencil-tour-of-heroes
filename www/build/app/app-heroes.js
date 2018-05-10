/*! Built with http://stenciljs.com */
const { h } = window.App;

import { HeroService } from './chunk2.js';

class Heroes {
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
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    render() {
        return (h("div", { class: 'app-heroes' },
            h("h2", null, "My Heroes"),
            h("ul", { class: "heroes" }, this.heroes ? (this.heroes.map((hero) => h("li", null,
                h("stencil-route-link", { url: `/detail/${hero.id}` },
                    h("span", { class: "badge" }, hero.id),
                    " ",
                    hero.name)))) : (null))));
    }
    static get is() { return "app-heroes"; }
    static get properties() { return { "heroes": { "state": true } }; }
    static get style() { return "/* HeroesComponent's private CSS styles */\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      position: relative;\n      cursor: pointer;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n\n    .heroes a {\n      color: #888;\n      text-decoration: none;\n      position: relative;\n      display: block;\n      width: 250px;\n    }\n\n    .heroes a:hover {\n      color:#607D8B;\n    }\n\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      min-width: 16px;\n      text-align: right;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }"; }
}

export { Heroes as AppHeroes };
