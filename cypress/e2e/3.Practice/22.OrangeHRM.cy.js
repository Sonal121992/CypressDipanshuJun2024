///<reference types = "cypress"/>

describe('Verify login page Orange HRM',function(){
    
    it('Verify login for valid data',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.OHRMLogin('Admin','admin123')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard")
    })

    it('Verify login for invalid Data',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('admin')
        cy.get('[name="password"]').type('admin')
        cy.get('[type="submit"]').click()
        cy.OHRMLogin('Admin','admin123')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard")
    })
})