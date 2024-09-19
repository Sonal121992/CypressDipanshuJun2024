export default class Descriptionpage{
    selector = {
        url: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstName: '[name="first_name"]',
        lastName: '[name="last_name"]',
        email: '[name="email"]',
        msg: '[name="message"]',
        submitBtn: '[type="submit"]',
        resetBtn: '[type="reset"]',
        onSuccess: 'h1',

        //text to validate
        errorTxt: 'Error: Invalid email address',
        successTxt: 'Thank You for your Message!'
    }

    visitUrl(){
        cy.visit(this.selector.url)
    }

    loginPage(fn,ln,eml,txt){
        cy.get(this.selector.firstName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(eml)
        cy.get(this.selector.msg).type(txt)
        cy.get(this.selector.submitBtn).click()
    }

    loginSuccess(){
        cy.get(this.selector.onSuccess).should('have.text',this.selector.successTxt)
    }

    loginError(){
        cy.contains(this.selector.errorTxt).should('be.visible')
    }
}