///<reference types = "cypress"/>

// CheckBox ====> can select multiple at a time

describe('Verify the checkbox function',function(){

    it.skip('Verify the Check Box for Web-University',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-2"]').click().should('be.checked')
        cy.get('[value="option-2"]').click().should('not.be.checked')
    })

    it.skip('Verify the check Box for letskodeit',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwcheck').click().should('be.checked')
        cy.get('#benzcheck').click().should('be.checked')
        cy.get('#bmwcheck').click().should('not.be.checked')
    })

    it('Verify the check box with Amazon Site',function(){
        cy.visit('https://www.amazon.in/')
        cy.get()
    })
})