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
        cy.screenshot() 
        // As soon we write the screenshot method in code we will see the red dot on the left side
        // when we add screenshot here then we will receive the screenshot of whole page till now whatever we have written.
        // In below we write screenshot method for submit button to be saved with submitbtn.png that we have mentioned.
        cy.get('[type="submit"]').screenshot('submitbtn')
        cy.get('[type="submit"]').click()
        //Assertions
        cy.get('h1').should('contain','Thank You for your Message!')
    })
})

// npx cypress run --record --key 56335e72-f95e-4826-a119-d3febd50fa82