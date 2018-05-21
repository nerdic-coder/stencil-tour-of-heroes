/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as Observable, b as of, c as MessageService } from './chunk-2019fd7d.js';

const CONFIG = { SERVER_URL: 'http://localhost:3000/' };

class HeroService {
    constructor() {
        this.messageService = MessageService.Instance;
    }
    getHeroes() {
        return Observable.create((observer) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', CONFIG.SERVER_URL + 'heroes');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    this.messageService.add(`HeroService: fetched heroes`);
                    observer.next(JSON.parse(xhr.responseText));
                }
                else {
                    observer.error(xhr.response);
                }
            };
            xhr.send();
        });
    }
    getHero(id) {
        return Observable.create((observer) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', CONFIG.SERVER_URL + `heroes/${id}`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    this.messageService.add(`HeroService: fetched hero with id:${id}`);
                    observer.next(JSON.parse(xhr.responseText));
                }
                else {
                    observer.error(xhr.response);
                }
            };
            xhr.send();
        });
    }
    /** PUT: update the hero on the server */
    updateHero(hero) {
        return Observable.create((observer) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', CONFIG.SERVER_URL + `heroes/${hero.id}`, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    this.messageService.add(`HeroService: updated hero with id:${hero.id}`);
                    observer.next(JSON.parse(xhr.responseText));
                }
                else {
                    observer.error(xhr.response);
                }
            };
            xhr.send(JSON.stringify(hero));
        });
    }
    /** POST: add a new hero to the server */
    addHero(hero) {
        return Observable.create((observer) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', CONFIG.SERVER_URL + `heroes`, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.onload = () => {
                if (xhr.status === 201) {
                    this.messageService.add(`HeroService: added new hero`);
                    observer.next(JSON.parse(xhr.responseText));
                }
                else {
                    observer.error(xhr.response);
                }
            };
            xhr.send(JSON.stringify(hero));
        });
    }
    /** DELETE: delete the hero from the server */
    deleteHero(hero) {
        return Observable.create((observer) => {
            const id = typeof hero === 'number' ? hero : hero.id;
            const xhr = new XMLHttpRequest();
            xhr.open('DELETE', CONFIG.SERVER_URL + `heroes/${id}`, true);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                    this.messageService.add(`HeroService: deleted hero with id:${id}`);
                    observer.next(JSON.parse(xhr.responseText));
                }
                else {
                    observer.error(xhr.response);
                }
            };
            xhr.send();
        });
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return Observable.create((observer) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', CONFIG.SERVER_URL + `heroes/?q=${term}`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    this.messageService.add(`HeroService: searched heroes`);
                    observer.next(JSON.parse(xhr.responseText));
                }
                else {
                    observer.error(xhr.response);
                }
            };
            xhr.send();
        });
    }
    static get Instance() {
        // Do you need arguments? Make it a regular method instead.
        return this._instance || (this._instance = new this());
    }
}

export { HeroService as a };
