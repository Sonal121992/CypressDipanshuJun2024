///<reference types = "cypress"/>

describe('Verify login page for Orange HRM',function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Verify login for valid Data',function(){
        cy.OHRMLogin('Admin','admin123')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard")
    })

    it('Verify login for invalid Data',function(){
        cy.OHRMLogin('admin','admin')
        cy.get('.oxd-alert-content-text').should('have.text','Invalid Credentials')
    })
})