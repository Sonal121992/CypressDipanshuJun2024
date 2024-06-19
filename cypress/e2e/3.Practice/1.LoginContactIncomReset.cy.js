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

    it('Verify details for incomplete data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // We have not pass the first_Name here
        cy.get('input[name="last_name"]').type('khante')
        cy.get('input[name="email"]').type('sonalkhante@gmail.com')
        cy.get('[name="message"]').type('Learning Cypress')
        cy.get('[type="submit"]').click()
        //Assertion
        cy.get('body').should('contain','Error: all fields are required')
        cy.contains('Error: all fields are required').should('be.visible')
        // Here we received the different error
    })

    it('Verify the reset button', function(){
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Action
        cy.get('input[name="first_name"]').type('Sonal')
        cy.get('input[name="last_name"]').type('khante')
        cy.get('input[name="email"]').type('sonalkhante@gmail.com')
        cy.get('[name="message"]').type('I am learning cypress')
        cy.get('[type="reset"]').click()
        // Assertion
        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('[name="message"]').should('have.text','')
    })
})