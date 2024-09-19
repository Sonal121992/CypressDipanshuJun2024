export default class myOhrmPage {
    selectors = {
        url : 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        userName : '[name="username"]',
        password : '[name="password"]',
        loginBtn : '[type="submit"]'
    }

    loginPage(un,pw){
        cy.visit(this.selectors.url)
        cy.get(this.selectors.userName).type(un)
        cy.get(this.selectors.password).type(pw)
        cy.get(this.selectors.loginBtn).click()
    }

    validationLoginPage(){
        
    }
}