/*! Built with http://stenciljs.com */
const { h } = window.App;

import { matchPath } from './chunk1.js';

class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("p", null,
                "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",
                h("a", { href: 'https://stenciljs.com' }, "stenciljs.com"),
                " to get started."),
            h("stencil-route-link", { url: '/profile/stencil' },
                h("button", null, "Profile page"))));
    }
    static get is() { return "app-home"; }
    static get style() { return ".app-home {\n  padding: 10px;\n}\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n  \nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}"; }
}

/**
  * @name Route
  * @module ionic
  * @description
 */
class RouteLink {
    constructor() {
        this.unsubscribe = () => { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        /**
         *  Custom tag to use instead of an anchor
         */
        this.custom = 'a';
        this.match = null;
    }
    // Identify if the current route is a match.
    computeMatch(pathname) {
        if (!pathname) {
            const location = this.activeRouter.get('location');
            pathname = location.pathname;
        }
        const match = matchPath(pathname, {
            path: this.urlMatch || this.url,
            exact: this.exact,
            strict: true
        });
        return match;
    }
    componentWillLoad() {
        // subscribe the project's active router and listen
        // for changes. Recompute the match if any updates get
        // pushed
        this.unsubscribe = this.activeRouter.subscribe(() => {
            this.match = this.computeMatch();
        });
        // Likely that this route link could receive a location prop
        this.match = this.computeMatch();
    }
    componentDidUnload() {
        // be sure to unsubscribe to the router so that we don't
        // get any memory leaks
        this.unsubscribe();
    }
    handleClick(e) {
        e.preventDefault();
        if (!this.activeRouter) {
            console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!');
            return;
        }
        const history = this.activeRouter.get('history');
        return history.push(this.getUrl(this.url), {});
    }
    // Get the URL for this route link without the root from the router
    getUrl(url) {
        const root = this.activeRouter.get('root') || '/';
        // Don't allow double slashes
        if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
            return root.slice(0, root.length - 1) + url;
        }
        return root + url;
    }
    render() {
        let anchorAttributes = {
            class: {
                [this.activeClass]: this.match !== null
            },
            onClick: this.handleClick.bind(this)
        };
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex });
        }
        return (h(this.custom, Object.assign({}, anchorAttributes),
            h("slot", null)));
    }
    static get is() { return "stencil-route-link"; }
    static get properties() { return { "activeClass": { "type": String, "attr": "active-class" }, "activeRouter": { "context": "activeRouter" }, "anchorRole": { "type": String, "attr": "anchor-role" }, "anchorTabIndex": { "type": String, "attr": "anchor-tab-index" }, "anchorTitle": { "type": String, "attr": "anchor-title" }, "custom": { "type": String, "attr": "custom" }, "exact": { "type": Boolean, "attr": "exact" }, "match": { "state": true }, "url": { "type": String, "attr": "url" }, "urlMatch": { "type": "Any", "attr": "url-match" } }; }
}

export { AppHome, RouteLink as StencilRouteLink };
