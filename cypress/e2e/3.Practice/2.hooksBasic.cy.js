// 20th June 2024

// execution sequence ===> before, beforeEach, afterEach, after

///<reference types = "cypress"/>

before(function(){
    cy.log("I will execute first")
})

beforeEach(function(){
    cy.log("I will execute before each test case")
})
it("Test case one", function(){
    cy.log("This is test case one TC001")
})
it("Test case two", function(){
    cy.log("This is test case two TC002")
})
afterEach(function(){
    cy.log("I will execute after each test case")
})

after(function(){
    cy.log("I will execute at last")
})

// node 2.hooksBasic.cy.js
// C:\Sonal\Minskole\CypressDipanshuJun2024\cypress\e2e\3.Practice\2.hooksBasic.cy.js

// Execution pattern

// 1. I will execute first =====================> 1st command
// 2. I will execute before each test case =====> command before test case
// 3. This is test case one TC001 ==============> it test case
// 4. I will execute after each test case ======> command after test case
// 5. I will execute before each test case =====> commnad before test case
// 6. This is test case two TC002 ==============> it test case
// 7. I will execute after each test case ======> command after test case
// 8. I will execute at last ===================> last command