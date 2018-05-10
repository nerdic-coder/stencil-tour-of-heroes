/*! Built with http://stenciljs.com */
const { h } = window.App;

import { HeroService } from './chunk2.js';

class HeroDetails {
    constructor() {
        this.heroService = HeroService.Instance;
    }
    componentWillLoad() {
        this.getHero();
    }
    goBack() {
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
    render() {
        return (h("div", { class: 'app-hero-details' }, this.hero ? (h("div", null,
            h("h2", null,
                this.hero.name.toUpperCase(),
                " Details"),
            h("div", null,
                h("span", null, "ids: "),
                this.hero.id),
            h("div", null,
                h("label", null,
                    "name:",
                    h("input", { type: "text", value: this.hero.name, onInput: (event) => this.handleChangeName(event), placeholder: "name" }))),
            h("button", { onClick: () => this.goBack() }, "go back"))) : (null)));
    }
    static get is() { return "app-hero-details"; }
    static get properties() { return { "hero": { "type": "Any", "attr": "hero", "mutable": true }, "match": { "type": "Any", "attr": "match" } }; }
    static get style() { return "/* HeroDetailComponent's private CSS styles */\n    label {\n      display: inline-block;\n      width: 3em;\n      margin: .5em 0;\n      color: #607D8B;\n      font-weight: bold;\n    }\n    input {\n      height: 2em;\n      font-size: 1em;\n      padding-left: .4em;\n    }\n    button {\n      margin-top: 20px;\n      font-family: Arial;\n      background-color: #eee;\n      border: none;\n      padding: 5px 10px;\n      border-radius: 4px;\n      cursor: pointer; cursor: hand;\n    }\n    button:hover {\n      background-color: #cfd8dc;\n    }\n    button:disabled {\n      background-color: #eee;\n      color: #ccc;\n      cursor: auto;\n    }"; }
}

export { HeroDetails as AppHeroDetails };
