/**
 * Finds an element by class, data-index, id, tag, text, title or xpath.
 * @param {string} elementType Type of the element
 * @param {string} elementName Name of the element
 * @example findElement('tag', 'icon-process')
 * @private
 * @returns The element from given type and name.
 */
export function findElement(elementType, elementName) {
    switch (elementType) {
        case 'class':
            return cy.get(`.${elementName}`);

        case 'data-index':
        case 'id':
        case 'title':
            return cy.xpath(`.//*[@${elementType}="${elementName}"]`);

        case 'tag':
            return cy.get(elementName);

        case 'text':
            return cy.xpath(`//*[contains(text(), '${elementName}')]`);

        case 'xpath':
            return cy.xpath(elementName);

        default:
            throw Error('No valid elementType entered.');
    }
}
