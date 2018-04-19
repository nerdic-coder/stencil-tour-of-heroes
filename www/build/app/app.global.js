/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){
    /** @stencil/router global **/

    Context.activeRouter = (function () {
        let state = {};
        let groups = {};
        let activeGroupId = 0;
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
            const listeners = nextListeners;
            for (let i = 0; i < listeners.length; i++) {
                const listener = listeners[i];
                listener();
            }
        }
        function createGroup(startLength) {
            activeGroupId += 1;
            groups[activeGroupId] = {};
            groups[activeGroupId].startLength = startLength;
            groups[activeGroupId].listenerList = [];
            groups[activeGroupId].groupedListener = () => {
                let switchMatched = false;
                groups[activeGroupId].listenerList.forEach((listener) => {
                    if (switchMatched) {
                        listener(true);
                    }
                    else {
                        switchMatched = listener(false) !== null;
                    }
                });
            };
            nextListeners.push(groups[activeGroupId].groupedListener);
            return activeGroupId;
        }
        function addGroupListener(listener, groupName, groupIndex) {
            groups[groupName].listenerList[groupIndex] = listener;
            if (groups[groupName].listenerList.length === groups[activeGroupId].startLength) {
                groups[groupName].groupedListener();
            }
        }
        function removeGroupListener(groupId, groupIndex) {
            groups[groupId].listenerList.splice(groupIndex, 1);
            if (groups[groupId].listenerList.length === 0) {
                const index = nextListeners.indexOf(groups[groupId].groupedListener);
                nextListeners.splice(index, 1);
                delete groups[groupId];
            }
        }
        function subscribe(listener, groupName, groupIndex) {
            if (typeof listener !== 'function') {
                throw new Error('Expected listener to be a function.');
            }
            if (groupName) {
                addGroupListener(listener, groupName, groupIndex);
            }
            else {
                nextListeners.push(listener);
            }
            let isSubscribed = true;
            return function unsubscribe() {
                if (!isSubscribed) {
                    return;
                }
                if (groupName) {
                    removeGroupListener(groupName, groupIndex);
                }
                else {
                    const index = nextListeners.indexOf(listener);
                    nextListeners.splice(index, 1);
                }
                isSubscribed = false;
            };
        }
        return {
            set,
            get,
            subscribe,
            createGroup,
        };
    })();
})(resourcesUrl);
})("App");