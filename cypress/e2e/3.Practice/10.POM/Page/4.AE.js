export default class AEPage {
    selector = {
        url: 'https://automationexercise.com/',

        // Signin
        loginSignUpBtn: 'a[href="/login"]',
        signUpName: '[data-qa="signup-name"]',
        signUpEmail: '[data-qa="signup-email"]',
        signUpBtn: '[data-qa="signup-button"]',

        //Signup Page
        mr: '[value="Mr"]',
        mrs: '[value="Mrs"]',
        pwd: '#password',
        bDay: '#days',
        bMonth: '#months',
        bYear: '#years',
        cbox1: '#newsletter',
        cbox2: '#optin',
        firstName: '#first_name',
        lastName: '#last_name',
        company: '#company',
        add1: '#address1',
        add2: '[id="address2"]',
        country: '[id="country"]',
        state: '#state',
        city: '#city',
        zip: '#zipcode',
        mobNo: '[id="mobile_number"]',
        createAccButtn: '[data-qa="create-account"]',
        
        // Validation Page
        accCreatedMsg: '[data-qa="account-created"]',
        continueBttn: '[data-qa="continue-button"]',

        // logout
        logoutBttn: '[href="/logout"]',

        // Login
        loginEmail: '[data-qa="login-email"]',
        loginPwd: '[data-qa="login-password"]',
        loginBttn: '[data-qa="login-button"]',
        loginVerify: '[class="fa fa-user"]',
        validateUser: 'ul[class="nav navbar-nav"] > li'
    }

    // new user sign up
    signUp(name1,email){
        cy.visit(this.selector.url)
        cy.get(this.selector.loginSignUpBtn).click()
        cy.get(this.selector.signUpName).type(name1)
        cy.get(this.selector.signUpEmail).type(email)
        cy.get(this.selector.signUpBtn).click()
    }

    // Now new user will fill data
    createUser(el){
        if(el.gender == "Mrs."){
            cy.get(this.selector.mrs).click()
        }
        else if(el.gender == "Mr."){
            cy.get(this.selector.mr).click()
        }

        cy.get(this.selector.pwd).type(el.password)
        cy.get(this.selector.bDay).select(el.day)
        cy.get(this.selector.bMonth).select(el.month)
        cy.get(this.selector.bYear).select(el.year)
        cy.get(this.selector.cbox1).click()
        cy.get(this.selector.cbox2).click()
        cy.get(this.selector.firstName).type(el.fstnme)
        cy.get(this.selector.lastName).type(el.lstnme)
        cy.get(this.selector.company).type(el.cmpny)
        cy.get(this.selector.add1).type(el.add1)
        cy.get(this.selector.add2).type(el.add2)
        cy.get(this.selector.country).select(el.contry)
        cy.get(this.selector.state).type(el.state)
        cy.get(this.selector.city).type(el.city)
        cy.get(this.selector.zip).type(el.zpcode)
        cy.get(this.selector.mobNo).type(el.mobNo)
        cy.get(this.selector.createAccButtn).click()
    }

    validation(css,msg){
        cy.get(css).should('have.text',msg)
    }

    btnClick(btncss){
        cy.get(btncss).click()
    }

    loginUser(el){
        cy.get(this.selector.loginEmail).type(el.email)
        cy.get(this.selector.loginPwd).type(el.password)
        cy.get(this.selector.loginBttn).click()
    }

    validateLoginUser(el){
        cy.get(this.selector.validateUser).eq(9).should('contain',el.name)
    }
}