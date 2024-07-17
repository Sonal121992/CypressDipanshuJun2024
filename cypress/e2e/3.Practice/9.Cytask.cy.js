///<reference types = "cypress"/>

describe('cy.task()',function(){

    it('Task example 1',function(){
        //cy.task(task-name, arguments).then()
        //cy.task(task-name)
        cy.task('print')
    })

    it('Task example 2',function(){
        cy.task('myLog','Hi How are you')
    })

    it('Task example 3',function(){
        cy.task('addition',{a:2,b:3}).then((sum)=>{
            cy.log(sum)
        })
    })
})