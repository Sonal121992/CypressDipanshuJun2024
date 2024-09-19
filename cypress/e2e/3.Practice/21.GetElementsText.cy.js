///<reference types = "cypress"/>

describe('Get element text using .invoke(), .text()',function(){
    
    it('Get text by .invoke() method',function(){
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('.section_header').invoke('text').then((text)=>{
            cy.log(text)
        })
    })

    it.only('Get text by .text() method',function(){
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('.section_header').then(($el)=>{
            cy.log($el.text())
        })
    })
})