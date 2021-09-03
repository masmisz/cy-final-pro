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

import 'cypress-file-upload'

Cypress.Commands.add('loginDojo', () => {
    cy.visit('https://admin.pkh.dojobox.id/')
    cy.get('#input-email').type('e@dojobox.id')
    cy.get('#input-password').type('admin')
    cy.get('#btn-login').click()
    cy.wait(3000)
})

Cypress.Commands.add('logoutDojo', () => {
    cy.contains('Super Admin').click()
    cy.get('#userDropdown').click({force:true})
    cy.get('.dropdown-menu > [href="#"]').click({force:true})
    cy.get('#exampleModalLabel').should('have.text', 'Ready to Leave?')
    cy.get(".modal-footer > .btn-primary").click();
})
