/// <reference types = "cypress"/>

describe('Verify environments in cypress',function(){
    it('Verify environments in cypress',function(){
        // cy.visit('https://practice.automationtesting.in/my-account/')
        // cy.get('[id="username"]').type('productionTesting@gmail.com')
        // cy.get('[id="password"]').type('Sonal@123')
        // cy.get('[name="login"]').click()
        // let email = 'productionTesting@gmail.com'
        // let uemai = email.split('@') //['productionTesting','gmail.com' ]
        // cy.log(uemai[0])
        // cy.get('strong').should('have.text', uemai[0])

        cy.visit('/my-account/')
        cy.get('[id="username"]').type(Cypress.env('uid'))
        cy.get('[id="password"]').type(Cypress.env('pw'))
        cy.get('[name="login"]').click()
        let email = Cypress.env('uid')
        let uid1 = email.split('@')
        cy.get('strong').should('have.text', uid1[0])
    })
})


// first way using npx cypress open 
// npx cypress open --config-file stage.config.js
// npx cypress open --config-file prod.config.js 

//second way
//npx cypress run --spec "cypress\e2e\3.Practice\24.environment.cy.js" --browser edge --headed --config-file stage.config.js
//npx cypress run --spec "cypress\e2e\3.Practice\24.environment.cy.js" --browser edge --headed --config-file prod.config.js

//third way
//third way to create short cut command
// create below script command in package.json
// "stage-env-test" : "npx cypress run --spec cypress\e2e\3.Practice\24.environment.cy.js --browser edge --headed --config-file stage.config.js",
// "prod-env-test" : "npx cypress run --spec cypress\e2e\3.Practice\24.environment.cy.js --browser edge --headed --config-file prod.config.js",
 
//and run following command on cli
//npm run stage-env-test
//npm run prod-env-test