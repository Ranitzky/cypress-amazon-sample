/**
 * Write text into a form field element.
 * @example Type "{value}" into input with (id|class) "{elementName}"
 * @example Type "Amazon Testartikel" into input with id "twotabsearchtextbox"
 * @param {string} value Value, that will be inserted into form field element
 * @param {string} Name of the form field element
 */
export function typeInto(value, elementType, elementName) {
    let element;

    switch (elementType) {
        case 'id':
            element = cy.get(`input#${elementName}`);
            break;

        case 'class':
            element = cy.get(`input.${elementName}`);
            break;

        default:
            break;
        // actually default is not required, as it will never become true,
        // because the regular regression for this step will not match.
    }

    element.type(value);
}
