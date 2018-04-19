/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppProfile {
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", { class: 'app-profile' },
                h("p", null,
                    "Hello! My name is ",
                    this.match.params.name,
                    ". My name was passed in through a route param!")));
        }
    }
    static get is() { return "app-profile"; }
    static get properties() { return { "match": { "type": "Any", "attr": "match" } }; }
    static get style() { return ".app-profile {\n  padding: 10px;\n}"; }
}

export { AppProfile };
