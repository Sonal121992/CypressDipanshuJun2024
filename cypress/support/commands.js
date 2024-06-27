// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//-- This is a parent command --
Cypress.Commands.add('contactUs', (fn, ln, eml, msg, css) => {
    cy.get('input[name="first_name"]').type(fn)
    cy.get('input[name="last_name"]').type(ln)
    cy.get('input[name="email"]').type(eml)
    cy.get('[name="message"]').type(msg)
    cy.get(css).click()
})

Cypress.Commands.add('OHRMLogin',(un, pw)=>{
    cy.get('input[name="username"]').type(un)
    cy.get('input[type="password').type(pw)
    cy.get('[type="submit"]').click()
})