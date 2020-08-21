const { trim } = require('lodash');
const { findElement } = require('../support/findElement');

/**
 * Stores a value from a given element as a key in the session store.
 * @example Store {childType} "{childName}" as "{key}"
 * @example Store class "price" as "articlePrice"
 * @memberof when
 * @param {string} elementType Type of the element (class|data-index|id|tag|title|xpath)
 * @param {string} elementName Name of the element
 * @param {string} key Key, that holds the stored element
 */
export function storeValue(elementType, elementName, key) {
    let element = findElement(elementType, elementName);

    element.should('be.visible').then(($el) => {
        let text = $el.text();
        text = text.replace('€', ''); // workaround, because price and currency symbol are separeted by &nbsp;
        text = trim(text);
        cy.log(`Stored ${key}: ${text}`);
        Cypress.config[key] = text;
    });
}
