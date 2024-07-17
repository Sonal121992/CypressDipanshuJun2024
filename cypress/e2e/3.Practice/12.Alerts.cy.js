///<reference types = "cypress"/>

//js alart ,we can not inspect
//window:alart()
//window:confirm()
//window:prompt()

describe('Verify the Alert handles',function(){

    it('Verify the Window JS Alert',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //handle alert
        cy.on('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true
        })

        //trigger event
        cy.get('[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('Verify the Window JS Confirm for ok',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return true
        })

        //trigger event
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('Verify the Window JS Confirm for cancel',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('Verify the Window JS Prompt',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am learning cypress')
            return true
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: I am learning Cypress')
    })

    it.only('Verify the Window JS Prompt',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
            return false
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: null')
    })
})