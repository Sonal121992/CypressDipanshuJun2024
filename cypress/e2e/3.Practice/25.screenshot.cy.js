///<reference types = "cypress"/>

describe('Verify MultiTab and MultiWindow',function(){

    it('Verify contact us page for valid data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Sonal')
        cy.get('input[name="last_name"]').type('Khante')
        cy.get('input[name="email"]').type('sonalk@gmail.com')
        cy.get('textarea[name="message"]').type('Like Art work')
        cy.screenshot()
        cy.get('[type="submit"]').screenshot('submitbtn')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.screenshot()
    })

    it('Verify multi Tab by removing target attribute',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="logoClass"]').screenshot('logo')
        cy.wait(2000)
        cy.get('h1').screenshot('practice page')
    })

    it.only('Verify contact us page for valid data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Novika')
        cy.get('input[name="last_name"]').type('Khante')
        cy.get('input[name="email"]').type('novikk@gmail.com')
        cy.get('textarea[name="message"]').type('I like Karate')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for you')
    }) // we will get fail report for this
    // With below run command we will get the sceenshot of the same report
    // we have also mentioned it to run in chrome browser.
    
})

// npx cypress run --spec cypress/e2e/3.Practice/25.screenshot.cy.js --headed --browser chrome