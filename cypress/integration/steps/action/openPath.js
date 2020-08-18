/**
 * Opens a page by a given path.
 * @example Open path "{path}"
 * @example Open path "/trade-in"
 * @memberof when
 * @param {string} path - Path that will be opened, auto-prefixed with baseurl of the current application/environment.
 */
export function openPath(path) {
    cy.visit(path);
}
