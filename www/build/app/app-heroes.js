/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as HeroService } from './chunk-c1d6e273.js';
import './chunk-2019fd7d.js';

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
        this.hero = { id: null, name: "" };
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    handleChangeName(event) {
        this.hero = {
            id: this.hero.id,
            name: event.target.value
        };
    }
    add() {
        this.hero.name = this.hero.name.trim();
        if (!this.hero.name) {
            return;
        }
        this.heroService.addHero(this.hero).subscribe(hero => {
            this.heroes.push(hero);
            this.hero = {
                id: this.hero.id,
                name: ""
            };
        });
    }
    delete(hero) {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }
    render() {
        return (h("div", { class: 'app-heroes' },
            h("h2", null, "My Heroes"),
            h("ul", { class: "heroes" }, this.heroes ? (this.heroes.map((hero) => h("li", null,
                h("stencil-route-link", { url: `/detail/${hero.id}` },
                    h("span", { class: "badge" }, hero.id),
                    " ",
                    hero.name),
                h("button", { class: "delete", title: "delete hero", onClick: () => this.delete(hero) }, "x")))) : (null)),
            h("div", null,
                h("label", null,
                    "Hero name:",
                    h("input", { type: "text", value: this.hero.name, onInput: (event) => this.handleChangeName(event), placeholder: "name" })),
                h("button", { onClick: () => this.add() }, "add"))));
    }
    static get is() { return "app-heroes"; }
    static get properties() { return {
        "hero": {
            "state": true
        },
        "heroes": {
            "state": true
        }
    }; }
    static get style() { return "/* HeroesComponent's private CSS styles */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n.heroes a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n\n.heroes a:hover {\n  color:#607D8B;\n}\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}"; }
}

export { Heroes as AppHeroes };
