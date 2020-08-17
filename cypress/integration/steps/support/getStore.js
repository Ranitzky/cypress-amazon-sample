const { replace } = require('lodash');

/**
 * Accepts a key and returns a stored variable from session store
 * @name getStore
 * @private
 * @param {string} key Key, that holds the stored value
 * @returns {string} a stored variable from session store
 */
export function getStore(key) {
    key = replace(key, '$', '');
    return Cypress.config[key];
}
