///<reference types = "cypress"/>

describe('Verify radio buttion and check box', function(){

    //radio button ===> only one is selected as a time

    it.skip('Verify radio button with Web-University for green button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="green"]').check().should('be.checked')
        cy.get('[value="yellow"]').should('not.be.checked')

        // Check the radio button by using parent element
        cy.get('[id="radio-buttons"]').find('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.be.checked')
    })

    it.skip('Verify radio button with LetsKodeIt site',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwradio').should('not.be.checked')
        cy.get('#bmwradio').click().should('be.checked')
        cy.get('#benzradio').should('not.be.checked')
        //cy.get('#bmwradio').uncheck().should('not.be.checked') // ===> will not work
        cy.get('#benzradio').click().should('be.checked')
        cy.get('#bmwradio').should('not.be.checked')
    })

    it('Verify the radio button with Amazon',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#icp-nav-flyout').click()
        cy.get('[value="hi_IN"]').click({force:true})
        cy.get('[id="icp-language-translation-heading"]').should('have.text','अनुवाद')
        cy.get('[value="mr_IN"]').click({force:true})
        cy.get('[id="icp-language-translation-heading"]').should('have.text','भाषांतर')
    })

})