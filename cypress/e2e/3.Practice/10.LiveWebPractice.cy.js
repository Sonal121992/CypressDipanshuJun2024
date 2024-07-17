///<reference types = "cypress"/>

describe('Live webpage practice',function(){

    it('Practice with Amazon Prime',function(){
        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root')
        cy.get('[aria-label="Search Prime Video"]').click()
        cy.get('#pv-search-nav').type('kungfu')
        cy.get('.SDdJQi > a').each(function(el){
            cy.log(el.text())
            if(el.text().includes('kungfu panda 1')){
                cy.wrap(el).click()
                cy.get('[data-testid="carousel-title"] > p').first().should('contain','kungfu panda 1')
            }
        })
    })

    it.only('Practice for Calculator',function(){
        cy.visit('https://www.desmos.com/scientific')
        cy.get('[aria-label="5"]').click()
        cy.get('[aria-label="Plus"]').click()
        cy.get('[aria-label="7"]').click()

        // cy.get('.dcg-static-mathquill-view').first().children().each((el)=>{
        //     cy.log(el.text())
        // })

        let str = ""
        cy.get('[class="dcg-mq-root-block"]').first().children().each((el)=>{
            cy.log(el.text())
            str+=el.text()
        }).then(()=>{
            cy.log(str.slice(1)) // we are slicing "=" here to get only number
            expect(str.slice(1)).to.eq('12')
        })
    })
})