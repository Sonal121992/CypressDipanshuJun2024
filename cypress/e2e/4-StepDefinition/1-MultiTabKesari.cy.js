//26th JUn 2024

///<reference types = "cypress"/>

describe('Verify the MultiTab functionality',function(){

    // it('Verify href property of multitab',function(){
    //     cy.visit('https://www.kesari.in/')
    //     cy.get('[class="blink-text ng-tns-c36-0"]').should('have.attr','href').and('include','summerhd24/')
    // })

    it('Verify multitab using remove attribute', function(){
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').invoke('removeAttr','target').click()
        // Here we are removing the "target=_blank" so that next page will open in same tab
        // blank keyword is use open the webpage on click in next tab 
        cy.url().should('contain','summerhd24/')
    })
    
    it.only('Verify multitab without removing target attribute', function(){
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').then((newTab)=>{
            // here we are not removing the target attr because here we want next webpage to open in new tab
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain','summerhd24/')
        })
        cy.go('back')
        cy.wait(4000)
        cy.go('forward')
    })
})