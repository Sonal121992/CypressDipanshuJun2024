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
})