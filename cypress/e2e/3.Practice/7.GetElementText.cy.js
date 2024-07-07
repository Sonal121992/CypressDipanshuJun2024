///<reference types = "cypress"/>

describe('Get element text', function(){

    it('To get text by .invoke() method',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('.section_header').invoke('text').then((text)=>{
            cy.log(text) // Autocomplete TextField
        })
    })

    it('To get text by .text() method',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('.section_header').then(($el)=>{
            cy.log($el.text()) //===> Here we get more accurate ans
        })
    })
})