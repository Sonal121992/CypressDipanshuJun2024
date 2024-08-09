///<reference types = "cypress"/>

// import varaible name from path 

import user1 from "../../fixtures/contact1.json" // single payload
import user2 from "../../fixtures/contact2.json" // multiple payload defined with varaible name
import user3 from "../../fixtures/contact3.json" // multiple payload given in a array 

describe("Verify payload by fixture in cypress",function(){
    it('Verify the contact1 form',function(){
        cy.log(user1)
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type(user1.firstName)
        cy.get('[name="last_name"]').type(user1.lastName)
        cy.get('[name="email"]').type(user1.email)
        cy.get('[name="message"]').type(user1.msg)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('Verify the contact2 form',function(){
        cy.log(user2)
        for(let keys in user2){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(user2[keys].firstName)
            cy.get('[name="last_name"]').type(user2[keys].lastName)
            cy.get('[name="email"]').type(user2[keys].email)
            cy.get('[name="message"]').type(user2[keys].msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        }
// Here we can run all payload in single test case...means we can't verify if there is problem in some of the payload
// we can't verify the exact problem in exact payload 
    })

    it("Verify contact3 form with forEach function",function(){
        user3.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
        // here also we have same results means test case will be run in single test case for multiple payloads
    })

    // We are giving forEach function before defing test case and introducing the index command for each and every payload
    user3.forEach(function(el,index){
        it.only(`Verify the contact3 form for user ${index+1}`,function(){
            cy.log(user3)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });
    })

    
    
})