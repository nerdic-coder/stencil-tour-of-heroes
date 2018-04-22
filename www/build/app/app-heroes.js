/*! Built with http://stenciljs.com */
const { h } = window.App;

const HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

class Heroes {
    constructor() {
        this.heroes = HEROES;
    }
    handleChangeName(event) {
        this.selectedHero = {
            id: this.selectedHero.id,
            name: event.target.value
        };
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
    render() {
        const heroDetails = this.selectedHero ? (h("div", null,
            h("h2", null,
                this.selectedHero.name.toUpperCase(),
                " Details"),
            h("div", null,
                h("span", null, "id: "),
                this.selectedHero.id),
            h("div", null,
                h("label", null,
                    "name:",
                    h("input", { type: "text", value: this.selectedHero.name, onInput: (event) => this.handleChangeName(event), placeholder: "name" }))))) : (h("p", null, "Select a hero!"));
        return (h("div", { class: 'app-heroes' },
            h("h2", null, "My Heroes"),
            h("ul", { class: "heroes" }, this.heroes.map((hero) => h("li", { class: (this.selectedHero === hero ? 'selected' : ''), onClick: () => this.onSelect(hero) },
                h("span", { class: "badge" }, hero.id),
                " ",
                hero.name))),
            heroDetails));
    }
    static get is() { return "app-heroes"; }
    static get properties() { return { "selectedHero": { "state": true } }; }
    static get style() { return ".app-heroes {\n  padding: 10px;\n}\n/* HeroesComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}"; }
}

export { Heroes as AppHeroes };
