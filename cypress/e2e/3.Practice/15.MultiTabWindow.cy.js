///<reference types = 'cypress'/>

describe('verify multi-tab and multi-window',function(){

    // To open the window in new tab
    it('Verify multi-tab href attribute',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').should('have.attr','href').and('include','/courses')
    })

    // To open the window in new tab ===> by removing target attribute
    it('Verify multi-tab by removing target attribute',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('contain','/courses')
    })

    it('Verify multi-tab without removing target attribute',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').then(function(newTab){
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain','/courses')
        })
    })

    // multi-tab on rahul shetty website 
    it.only('Verify multi-tab by removing target attribute in rahul shetty site', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').first().invoke('removeAttr','target').click()
        cy.url().should('contain','qaclickacademy')
    })

    it('Verify multi-tab without removing target attribute',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').first().then(function(newTab1){
            let url1 = newTab1.prop('href')
            cy.visit(url1)
            cy.url().should('contain','qaclickacademy')
        })
    })

    // Multi-window //////////////////////////////////////////////

    it('Verify multi-window for letKodeIt',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.window().then((win)=>{
            cy.stub(win,'open').callsFake((url)=>{
                win.location.href = url
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain','/courses')
    })

    it('Verify multi-window for rahulshetty website',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then((win)=>{
            cy.stub(win,'open').callsFake((url)=>{
                win.location.href = url
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain','qaclickacademy')
    })
})