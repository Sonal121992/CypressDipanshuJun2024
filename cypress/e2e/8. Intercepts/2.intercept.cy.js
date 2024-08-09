/// <reference types = "cypress"/>

import interData from "../../fixtures/2interceptData.json"


describe('Verify intercept concept in cypress',function(){

    // Get Comment
    it('Verify getComment',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({ // network me sabse niche 1 me milega
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        },{
            body: interData
            // {
            //     "postId": 1,
            //     "id": 1,
            //     "name": "sonal",
            //     "email": "sonall@gmail.com",
            //     "body": "I am learning Cypress"
            //  } ===> This we have put in 2interceptData.json ==> as a fixture file
        }).as('getComment')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res)=>{
            cy.log(res)
            expect(res.response.body.name).to.eq(interData.name)
        })
        cy.get('[class="network-comment"]').should('contain',interData.body)
    })

    // Post Comment
    it('verify postComment', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({// network me sabse niche dekhna comment me
            url:'https://jsonplaceholder.cypress.io/comments',
            method : 'POST'
            
        // },{
        //     body:
        //     {
        //         "name": "Novika",
        //         "email": "sonall@gmail.com",
        //         "body": "i am learning python",
        //         "id": 501
        //       }
            
        }).as('postComment')

        cy.contains('Post Comment').click()
        cy.wait('@postComment').then((res2)=>{
            cy.log(res2)
            expect(res2.response.statusCode).to.eq(201)// yaha status code check kar rai hai
        })

        cy.get('[class="network-post-comment"]').should('have.text','POST successful!')
    })

    //Update Comment
    it('Verify Update Comment',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({// network me sabse niche dekhna 1 me
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'PUT'
        }).as('updateComment')

        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((res)=>{
            cy.log(res)
            expect(res.response.body.name).to.eq('Using PUT in cy.intercept()')// name ko update kar rai hai
            // eq ka sentence click karne ke baad network me jakar payload se laaya hai
        })
    })
})