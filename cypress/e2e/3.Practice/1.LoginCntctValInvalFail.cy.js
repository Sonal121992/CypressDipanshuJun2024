///<reference types = "cypress"/>

describe('Verify the contactUs page', function(){//scenario

    it('verify details for valid data',function(){//test case
        ///AAA
        //Arrangements
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //Actions
        cy.get('input[name="first_name"]').type('Sonal')
        cy.get('input[name="last_name"]').type('khante')
        cy.get('input[name="email"]').type('sonalkhante@gmail.com')
        cy.get('[name="message"]').type('I am learning cypress')
        cy.get('[type="submit"]').click()
        //Assertions
        cy.get('h1').should('contain','Thank You for your Message!')
    })

    it('Verify details for invalid data', function(){
        //Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //Actions
        cy.get('input[name="first_name"]').type('Sonal')
        cy.get('input[name="last_name"]').type('Khante')
        cy.get('input[name="email"]').type('sonalkhantegmail.com')
        cy.get('[name="message"]').type('Learning Cypress')
        cy.get('[type="submit"]').click()
        //Assertion
        cy.get('body').should('contain','Error: Invalid email address')
        cy.contains('Error: Invalid email address').should('be.visible')
    })

    it.only('Verify contact us page for reporters -fail test case',function(){
        //Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //Action
        cy.get('input[name="first_name"]').type('Rahul')
        cy.get('input[name="last_name"]').type('Sharma')
        cy.get('input[name="email"]').type('rahuls@gmail.com')
        cy.get('[name="message"]').type('Cricketer')
        cy.get('[type="submit"]').click()
        //Assertion
        cy.get('h1').should('have.text','Thank You for your')
    })
})

// npx cypress run --spec cypress/e2e/3.Practice/1.LoginCntctValInvalFail.cy.js

// Here with this we will get the report 

// To get the report we need to follow the steps as given in reportersInfo.txt