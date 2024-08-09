/// <reference types = "cypress"/>

describe('Verify the intercept concept in cypress',function(){
    it('Verify the post request',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }).as('getComment')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res)=>{
            //cy.log(res.response.body.body)
            cy.get('[class="network-comment"]').should('have.text',res.response.body.body)
        })
        cy.get('[class="network-comment"]').should('contain','laudantium enim')
    })
})