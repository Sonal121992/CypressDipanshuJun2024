///<reference types = "cypress"/>

describe("Verify the payload from fixture file in cypress",function(){
    let info = {
        firstName: "Sonal",
        lastName: "Khante",
        email: "sonalkhante@gmail.com",
        msg: "I am learning cypress with pre-defined data"
    }

    it("1. Verify Contact us form",function(){ // Normal Method
        // AAA

        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        // Actions
        cy.get('[name="first_name"]').type('Sonal')
        cy.get('[name="last_name"]').type('Khante')
        cy.get('[name="email"]').type('sonalk@gmail.com')
        cy.get('[name="message"]').type('Learning cypress')
        cy.get('[type="submit"]').click()

        // Assertion
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    // Defining the data before actually writing the code
    it("2. Verify Contact us form on defining data",function(){
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type(info.firstName)
        cy.get('[name="last_name"]').type(info.lastName)
        cy.get('[name="email"]').type(info.email)
        cy.get('[name="message"]').type(info.msg)
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    // With Fixture
    it("3. Verify Contact us form with fixture file",function(){
        cy.fixture("contact1").then(function(user){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.firstName)
            cy.get('[name="last_name"]').type(user.lastName)
            cy.get('[name="email"]').type(user.email)
            cy.get('[name="message"]').type(user.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text','Thank You for your Message!')
        })

    })

    it.only('4(1). Verify Contact us form for specific user from list of user in fixture',function(){
        cy.fixture("contact2").then(function(user){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.userOne.firstName)
            cy.get('[name="last_name"]').type(user.userOne.lastName)
            cy.get('[name="email"]').type(user.userOne.email)
            cy.get('[name="message"]').type(user.userOne.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text','Thank You for your Message!')
        })
    })

    it.only('4(2). Verify Contact us form for specific user from list of user in fixture',function(){
        cy.fixture("contact2").then(function(user){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('[name="first_name"]').type(user.userTwo.firstName)
            cy.get('[name="last_name"]').type(user.userTwo.lastName)
            cy.get('[name="email"]').type(user.userTwo.email)
            cy.get('[name="message"]').type(user.userTwo.msg)
            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text','Thank You for your Message!')
        })
    })
})