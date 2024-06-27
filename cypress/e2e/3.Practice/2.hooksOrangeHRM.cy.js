///<reference types = "cypress"/>

describe('Verify the login credentials with Orange HRM', function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    // For valid Data
    it('Verify the valid credentials',()=>{
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })

    // FOr invalid data
    it('Verify the valid credentials',()=>{
        cy.get('[name="username"]').type('ABC')
        cy.get('[type="password"]').type('abc23')
        cy.get('[type="submit"]').click()
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})