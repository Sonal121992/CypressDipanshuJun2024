///<reference types = "cypress"/>

describe('Verify Static and Dynamic Dropdown',function(){

    it('Test case for static dropdown',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('SQL')
        cy.get('#dropdowm-menu-2').select('Maven')
        cy.get('#dropdowm-menu-3').select('JavaScript')
    })

    it('Test case 1 for dynamic dropdown',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('b')
        cy.get('#myInputautocomplete-list > div').each(function(el){
            cy.log(el.text()) //===> this will give us all list from the name 
            //for s ==> spinach, spigatti
            //for m ==> milk, meatballs, meat
            //for h ===> Honey, Ham, Hash bromns, Hummus...same for b
            if(el.text()=='Barley'){
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain','Barley')
            }
        })
    })

    it('Test case 2 for dynamic dropdown',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('gr')
        cy.get('#myInputautocomplete-list > div').each(function($el){
            //cy.log($el.text())
            if($el.text() == 'Grapes'){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('contain','Grapes')
            }
        })
    })

    it.only('Test case 3 for dynamic dropdown',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('c')
        cy.get('#myInputautocomplete-list > div').each(function(el){
            cy.wrap(el).invoke('text').then((text)=>{
                if(text == 'Chips') {
                    cy.wrap(el).click()
                    cy.get('#submit-button').click()
                    cy.url().should('contain','Chips')
                }
            })
        })
    })
})