/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){
    /** @stencil/router global **/

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * @typechecks
     *
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            // Added the nonzero y check to make Flow happy, but it is redundant
            return x !== 0 || y !== 0 || 1 / x === 1 / y;
        }
        else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /**
     * Performs equality by iterating through keys on an object and returning false
     * when any key has values which are not strictly equal between the arguments.
     * Returns true when the values of all keys are strictly equal.
     */
    function shallowEqual(objA, objB) {
        if (is(objA, objB)) {
            return true;
        }
        if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
            return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
            return false;
        }
        // Test for A's keys different from B.
        for (var i = 0; i < keysA.length; i++) {
            if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
                return false;
            }
        }
        return true;
    }

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Context.activeRouter = (function () {
        let state = {};
        const nextListeners = [];
        function getDefaultState() {
            return {
                location: {
                    pathname: Context.window.location.pathname,
                    search: Context.window.location.search
                }
            };
        }
        function set(value) {
            state = Object.assign({}, state, value);
            dispatch();
        }
        function get(attrName) {
            if (Object.keys(state).length === 0) {
                return getDefaultState();
            }
            if (!attrName) {
                return state;
            }
            return state[attrName];
        }
        function dispatch() {
            return __awaiter(this, void 0, void 0, function* () {
                const listeners = nextListeners;
                const matchList = [];
                const pathname = get('location').pathname;
                // Assume listeners are ordered by group and then groupIndex
                for (let i = 0; i < listeners.length; i++) {
                    let match = null;
                    const isGroupMatch = matchList.some(me => {
                        return me[1] != null && me[2] != null && me[2] === listeners[i].groupId;
                    });
                    // If listener has a groupId and group already has a match then don't check
                    if (!isGroupMatch) {
                        match = listeners[i].isMatch(pathname);
                        // If listener does not have a group then just check if it matches
                    }
                    else {
                        match = null;
                    }
                    if (!shallowEqual(listeners[i].lastMatch, match)) {
                        if (!isGroupMatch && listeners[i].groupId) {
                            matchList.unshift([i, match, listeners[i].groupId]);
                        }
                        else {
                            matchList.push([i, match, listeners[i].groupId]);
                        }
                    }
                    listeners[i].lastMatch = match;
                }
                for (const [listenerIndex, matchResult, groupId] of matchList) {
                    if (groupId && matchResult != null) {
                        yield listeners[listenerIndex].listener(matchResult);
                    }
                    else {
                        listeners[listenerIndex].listener(matchResult);
                    }
                }
            });
        }
        function addListener(routeSubscription) {
            const pathname = get('location').pathname;
            const match = routeSubscription.isMatch(pathname);
            routeSubscription.lastMatch = match;
            routeSubscription.listener(match);
            // If the new route does not have a group then add to the end of the list
            // If this is the first item push it on the list.
            if (routeSubscription.groupId == null || routeSubscription.groupIndex == null || nextListeners.length === 0) {
                nextListeners.push(routeSubscription);
            }
            else {
                for (let i = 0; i < nextListeners.length; i++) {
                    const { groupId, groupIndex } = nextListeners[i];
                    if (groupId == null) {
                        nextListeners.splice(i, 0, routeSubscription);
                        break;
                    }
                    if (groupId === routeSubscription.groupId && groupIndex > routeSubscription.groupIndex) {
                        nextListeners.splice(i, 0, routeSubscription);
                        break;
                    }
                }
            }
        }
        function removeListener(routeSubscription) {
            const index = nextListeners.indexOf(routeSubscription);
            nextListeners.splice(index, 1);
        }
        /**
         * Subscribe to the router for changes
         * The callback that is returned should be used to unsubscribe.
         */
        function subscribe(routeSubscription) {
            addListener(routeSubscription);
            let isSubscribed = true;
            return function unsubscribe() {
                if (!isSubscribed) {
                    return;
                }
                removeListener(routeSubscription);
                isSubscribed = false;
            };
        }
        return {
            set,
            get,
            subscribe,
            dispatch
        };
    })();
})(resourcesUrl);
})("App");