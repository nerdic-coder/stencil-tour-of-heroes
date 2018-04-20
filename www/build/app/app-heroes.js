/*! Built with http://stenciljs.com */
const { h } = window.App;

class Heroes {
    constructor() {
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    render() {
        return (h("div", { class: 'app-heroes' },
            h("h2", null,
                this.hero.name.toUpperCase(),
                " Details"),
            h("div", null,
                h("span", null, "id: "),
                this.hero.id),
            h("div", null,
                h("span", null, "name: "),
                this.hero.name)));
    }
    static get is() { return "app-heroes"; }
    static get style() { return ".app-heroes {\n  padding: 10px;\n}"; }
}

export { Heroes as AppHeroes };
