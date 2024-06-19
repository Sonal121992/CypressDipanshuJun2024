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
})