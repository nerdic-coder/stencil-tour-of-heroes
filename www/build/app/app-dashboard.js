/*! Built with http://stenciljs.com */
const { h } = window.App;

import { HeroService } from './chunk2.js';

class Dashboard {
    constructor() {
        this.heroService = HeroService.Instance;
    }
    componentWillLoad() {
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
    render() {
        return (h("div", { class: 'app-dashboard' },
            h("h2", null, "Top Heroes"),
            h("div", { class: "grid grid-pad" }, this.heroes ? (this.heroes.map((hero) => h("stencil-route-link", { url: `/detail/${hero.id}`, class: "col-1-4" },
                h("div", { class: "module hero" },
                    h("h4", null, hero.name))))) : (null))));
    }
    static get is() { return "app-dashboard"; }
    static get properties() { return { "heroes": { "state": true } }; }
    static get style() { return "/* DashboardComponent's private CSS styles */\n    [class*='col-'] {\n      float: left;\n      padding-right: 20px;\n      padding-bottom: 20px;\n    }\n    [class*='col-']:last-of-type {\n      padding-right: 0;\n    }\n    a {\n      text-decoration: none;\n    }\n    *, *:after, *:before {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    h3 {\n      text-align: center; margin-bottom: 0;\n    }\n    h4 {\n      position: relative;\n    }\n    .grid {\n      margin: 0;\n    }\n    .col-1-4 {\n      width: 25%;\n    }\n    .module {\n      padding: 20px;\n      text-align: center;\n      color: #eee;\n      max-height: 120px;\n      min-width: 120px;\n      background-color: #607D8B;\n      border-radius: 2px;\n    }\n    .module:hover {\n      background-color: #EEE;\n      cursor: pointer;\n      color: #607d8b;\n    }\n    .grid-pad {\n      padding: 10px 0;\n    }\n    .grid-pad > [class*='col-']:last-of-type {\n      padding-right: 20px;\n    }\n    \@media (max-width: 600px) {\n      .module {\n        font-size: 10px;\n        max-height: 75px; }\n    }\n    \@media (max-width: 1024px) {\n      .grid {\n        margin: 0;\n      }\n      .module {\n        min-width: 60px;\n      }\n    }"; }
}

export { Dashboard as AppDashboard };
