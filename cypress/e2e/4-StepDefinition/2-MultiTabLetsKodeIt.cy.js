///<reference types = "cypress"/>

describe('Verify multitab and multi window in cypress',function(){
    it('Verify href property of multitab-letkode',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').should('have.attr','href').and('include','/courses')
    })
    // Here we will not get proper ans

    it('Verify href property of multi-letkode removing target property', function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').invoke('removeAttr','target').click()
        cy.url().should('contain','/courses')
    })

    it.only('Verify href property of multitab-letkode without removing target property',function(){//Not running
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').then(function(newTab){
            let url = newTab.prop('href') // error ===> href is not defined
            cy.visit(url)
            cy.url().should('contain','/courses')
        })
    })

    it('Verify multitab window property in cypress-letkode',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.window().then((win)=>{
            //Window() global window ka obj return karta hai
            cy.stub(win,'open').callsFake((url)=>{
                //Stub karna hai...means openwindow ke back jo bhi function hoti hai usse stub karna hai new window me open nai karna hai
                win.location.href = url
                // win ye varaible hai
                // url se stub karna hai
                // Calls Callsfake se URL milta hai
                // Win.location.href  = URL ye batata hai new window open nai karna hai....same window me he open karna hai
            })
        })
        cy.get('[id="openwindow"]').click()
        cy.url().should('contain','/courses')
    })

    it('Verify multiTab window property in cypress with rohitshetty',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then((win)=>{
            // Cy.window promise return karta hai
            cy.stub(win,'open').callsFake((url)=>{
                win.location.href = url
                //Agar URL change hota hai to...cypress.config ne changes karo
                // Chromewebsecurity
            })
        })
        cy.get('[id="openwindow"]').click() //here page load ===> waiting for new page to load ///pageload timeout
        cy.url().should('contain','qaclickacademy')
    })
})