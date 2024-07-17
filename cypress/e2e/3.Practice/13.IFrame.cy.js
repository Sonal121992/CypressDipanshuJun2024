///<reference types ="cypress"/>

describe('Verify iframe in cypress',function(){

    it('Verify iframe using jquery',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href="index.html"]').should('have.text','Home')
        // ==> We are not able track above code since Home is inserted into Iframe 
        // we need to track the iframe first then, will track Home 
        cy.get('#frame').then(function($frame){ // Since here we are using $frame because its jquery
            cy.log($frame)
            cy.log($frame.contents())
            let iFrameBody1 = $frame.contents().find('body')
            cy.log(iFrameBody1)
            cy.wrap(iFrameBody1).as('iframe') // Here we are wrapping the frame as iframe 
            cy.get('@iframe').find('a[href="index.html"]').should('have.text','Home')
            // So here we are taking the iframe which we have wrapped
            // then find css selector for home 
            // here we have not use array
        })
    })

    it('Verify iframe using JavaScript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href="index.html"]').should('have.text','Home')
        // ==> We are not able track above code since Home is inserted into Iframe 
        // we need to track the iframe first then, will track Home 
        cy.get('#frame').then(function(frame){ // Since here we are using frame because its JavaScript
            cy.log(frame[0].contentDocument.body) //===> identifying the 1st frame 
            let iFrameBody2 = frame[0].contentDocument.body // frame[0] ==> for index 0 in the array ==> 1st frame
            // saving the 1st frame into iFrameBody2 
            cy.wrap(iFrameBody2).as('iframe')
            // name the iFrameBody2 as iframe ===> so that we can call it afterwards in code
            cy.get('@iframe').find('a[href="index.html"]').should('have.text','Home')
        })
    })

    it('Verify iframe by its function',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let iFrameBody3 = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        // get ===> #frame
        // its ===> Get a property's value on the previously yielded subject.
        // 0 for 1st index of array, contentDocument.body for body ,
        // then ==> Enables you to work with the subject yielded from the previous command.
        // wrap ==> Yield the element passed into .wrap().
        // here we are chaining the function one after another 
        iFrameBody3.find('a[href="index.html"]').should('have.text','Home')
        // Here instead of using 3 4 sentences of code, we are wraping in 2 sentence 
    })

    it.only('Verify iFrame by utility function',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getIFrameBody('#frame').find('a[href="index.html"]').should('have.text','Home')
        // Here we have introduce getIFrameBody in command.js file and imported here
        // Cypress.Commands.add('getIFrameBody',(css)=>{
        //    return cy.get(css).its('0.contentDocument.body').then(cy.wrap)
        //    })
    })

    it.only('Verify iFrame by utility function for letKode',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.getIFrameBody('#courses-iframe').find('[class="dynamic-heading margin-bottom-20"]').should('have.text','All Courses')
    })
})