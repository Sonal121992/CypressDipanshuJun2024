// hooks
// custom command

///<reference types = "cypress"/>

describe('Verify the login page with Orange HRM', function(){
    beforeEach(function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it('Verify for valid data', function(){
        //cy.get('input[name="username"]').type('Admin')
        //cy.get('input[type="password"]').type('admin123')
        //cy.get('[type="submit"]').click()
        cy.OHRMLogin('Admin','admin123')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })

    it('Verify for invalid data', function(){
        //cy.get('input[name="username"]').type('ABC')
        //cy.get('input[type="password"]').type('abc123')
        //cy.get('[type="submit"]').click()
        cy.OHRMLogin('ABC','abc123')
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})