// Hooks example
// Custom Commands

///<reference types = "cypress"/>

describe('Verify the Contact us web page', function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Verify the contact us page for valid data', function(){
        // Action
        // cy.get('input[name="first_name"]').type('Sonal')
        // cy.get('input[name="last_name"]').type('khante')
        // cy.get('input[name="email"]').type('sonalkhante@gmail.com')
        // cy.get('[name="message"]').type('I am learning cypress')
        // cy.get('[type="submit"]').click()

        cy.contactUs('Sonal','Khante','sonalkhante@gmail.com','I am learning cypress','[type="submit"]')
        // contactUs in the same function from commands.js
        // cy.get('[type="submit"]').click() ====> instead of this we can use it in above function
        
        //Assertions
        cy.get('h1').should('contain','Thank You for your Message!')
    })
})