/// <reference types = 'cypress'/>

describe ('Verify shadowdom with cypress',function(){
    it('Pattern one',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        // in shadow we can't find anything directly we need to specify shadow-dom first then find the elements from inside
        cy.get('shadow-signup-form').shadow().find('[name="username"]').type('Sonal')
        cy.get('shadow-signup-form').shadow().find('[name="email"]').type('sonalkhante@gmail.com')
        cy.get('shadow-signup-form').shadow().find('[name="password"]').type('khante99')
        cy.get('shadow-signup-form').shadow().find('[name="confirm_password"]').type('khante99')
        cy.get('shadow-signup-form').shadow().find('[type="button"]').click()
    })

    it.only('Pattern Two',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('[name="username"]',{includeShadowDom:true}).type('Sonal')
        cy.get('[name="email"]',{includeShadowDom:true}).first().type('sonalk@gmail.com')
        cy.get('[name="password"]',{includeShadowDom:true}).type('sonal1992')
        cy.get('[name="confirm_password"]',{includeShadowDom:true}).type('sonal1992')
        cy.get('[type="button"]',{includeShadowDom:true}).click()
    })
})