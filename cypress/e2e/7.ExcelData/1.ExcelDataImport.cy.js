/// <reference types = "cypress"/>

describe('Verify the excel payload in fixture',function(){
    it('Verify the contact us form with data from Excel',function(){
        // when we are working with excel sheet then, we have install node-xlsx with command in terminal ===> npm install node-xlsx --save
        // Then only this code will run further
        // define parseXlsx in command.js file of support folder
        // also update the information in cypress.config.js file
        // Mostly for excel data the code is already written in cypress.config.js filr ==> we just need to uncommit it.
        cy.parseXlsx('C:/Sonal/Minskole/CypressDipanshuJun2024/cypress/fixtures/exelPayload.xlsx').then((jsonData)=>{
            // change the \ to /
            cy.log(jsonData[0].data)
            //cy.log(jsonData[0].data[1][0])

            for(let i=1; i<jsonData[0].data.length; i++){
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                //                                                 row column
                cy.get('[name="first_name"]').type(jsonData[0].data[i][0])
                cy.get('[name="last_name"]').type(jsonData[0].data[i][1])
                cy.get('[name="email"]').type(jsonData[0].data[i][2])
                cy.get('[name="message"]').type(jsonData[0].data[i][3])
                cy.get('[type="submit"]').click()
                cy.get('h1').should('have.text','Thank You for your Message!')
            }
        })
        

    })
})