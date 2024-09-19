export default class homePage{
    selector = {
        url: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstName: '[name="first_name"]',
        lastName: '[name="last_name"]',
        email: '[name="email"]',
        message: '[name="message"]',
        submitButton: '[type="submit"]',
        successH1: 'h1'
    }

    //methods
    visitUrl(){
        cy.visit(this.selector.url)
    }

    loginPage(fn,ln,eml,txt){
        cy.get(this.selector.firstName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(eml)
        cy.get(this.selector.message).type(txt)
        cy.get(this.selector.submitButton).click()
    }

    positiveValidation(){
        cy.get(this.selector.successH1).should('have.text','Thank You for your Message!')
    }
}