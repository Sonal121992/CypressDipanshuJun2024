///<reference types="cypress" />
describe("Login using session", () => {
    beforeEach(() => {
       cy.HRMLoginSession('Admin','admin123')
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })

    it("orange HRM login", () => {

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })
    it("orange HRM login", () => {

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
        cy.get('ul[class="oxd-main-menu"] >li').eq(1).click()
    })
})