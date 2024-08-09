/// <reference types = "cypress"/>

describe('Verify Actions with Drag Drop, Double Click, Hover and Click Hold',()=>{
    it('Verify Drag and Drop process',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('[id="draggable"]').trigger('mousedown',{which:1}) 
        // {which:1} ===> for 1st button ==> left button // mousedown to press button
        cy.get('[id="droppable"]').trigger('mousemove',{which:1}).trigger('mouseup',{force: true}) 
        // mousemove ==> to move the block //mouseup ==> to release the button
        cy.get('p[style="background-color: rgb(244, 89, 80); height: 100%;"]>b').should('have.text','Dropped!') // assertion

        cy.get('[id="draggable"]').trigger('mousedown',{button:1})
        cy.get('[id="droppable"]').trigger('mousemove',{button:1}).trigger('mouseup',{force: true})
        cy.get('p[style="background-color: rgb(244, 89, 80); height: 100%;"]>b').should('have.text','Dropped!')
    })

    it('Verify Double Click',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('[id="double-click"]').should('not.have.class','double') // Because at 1st we don't have double keyword in class
        cy.get('[id="double-click"]').trigger('dblclick',{which:1})
        cy.get('[id="double-click"]').should('have.class','double')// on dbl click we get that double keyword in class.
        cy.get('[id="double-click"]').trigger('dblclick',{which:1})
        cy.get('[id="double-click"]').should('not.have.class','double')
    })

    it('Verify the Mouse Hover',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('[class="list-alert"]').first().should('not.be.visible')
        //cy.contains('Hover Over Me First!').trigger('mouseover')
        //cy.contains('Hover Over Me First!').invoke('show')
        cy.get('[class="dropdown-content"]').first().invoke('show')
        cy.get('[class="list-alert"]').first().should('be.visible')
        cy.get('[class="list-alert"]').first().click()
        cy.on('window:alert',function(text){
            expect(text).to.eq('Well done you clicked on the link!')
            return true
        })
    })

    it.only('Verify the Click and Hold',()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        //cy.get('[id="click-box"]').should('contains','Click and Hold!')
        cy.get('[id="click-box"]').trigger('mousedown',{button:1}).should('contains','Well done!')
        cy.get('[id="click-box"]').trigger('mouseup',{button:1}).should('have.text','Dont release me!!!')
    })
})