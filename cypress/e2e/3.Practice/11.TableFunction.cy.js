///<reference types = "cypress"/>

describe('Verify the tables functionality with function method',function(){

    function calculateAge(css,Esum){
        let sum = 0
        cy.get(css).find('tr').each((row)=>{
            cy.log(row.find('td').last().text())
            sum += Number(row.find('td').last().text())
        }).then(()=>{
            cy.log(sum)
            expect(sum).to.eq(Esum)
        })
    }
    
        it('WebUniversityDriver Table 1',function(){
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            calculateAge('#t01',159)
        })

        it('WebUniversityDriver Table 2',function(){
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            calculateAge('#t02',163)
        })

        
})