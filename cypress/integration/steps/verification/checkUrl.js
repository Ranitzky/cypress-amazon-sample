/**
 * Checks, that a specific string is included in the url
 * @example Verify url contains {expectedUrl}
 * @example Verify url contains "/?query=sample"
 * @param {string} expectedUrl Part of the url, that will be validated
 */
export function checkUrl(expectedUrl) {
    cy.url().should('include', expectedUrl);
}
