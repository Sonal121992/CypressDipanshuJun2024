///<reference types = "cypress"/>

describe('Verify contactUs page',function(){
    it('Verify the contactUs page for Valid Data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.log(`Running in ${Cypress.browser.name}`) // Running in chrome // ww will get the browser name were we are running
        cy.log(`Browser family ${Cypress.browser.family}`) // Browser family chromium
        cy.log(`Browser version ${Cypress.browser.version}`) // Browser version 127.0.6533.89
        cy.log(`Browser major version ${Cypress.browser.majorVersion}`) // Browser major version 127
        if(Cypress.browser.name === 'edge'){
            cy.log('edge')
        }
    })
})