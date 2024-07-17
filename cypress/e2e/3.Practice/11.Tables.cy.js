///<reference types = "cypress"/>

describe('Verify tables in cypress',function(){


    it('Verify the age from webUniversitydriver table 1',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each((row)=>{
            cy.log(row.find('td').last().text())
            sum += Number(row.find('td').last().text())
        }).then(()=>{
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })

    it('Verify the age from WebUniversityDriver Table 2',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum1 = 0
        cy.get('#t02').find('tr').each((row)=>{
            cy.log(row.find('td').last().text())
            sum1 += Number(row.find('td').last().text()) 
        }).then(()=>{
            cy.log(sum1)
            expect(sum1).to.eq(163)
        })
    })

    it('Verify the price total from letKode table',function(){
        cy.visit('https://www.letskodeit.com/practice')
        let totalPrice = 0
        cy.get('#product').find('tr').each((row)=>{
            cy.log(row.find('td').last().text())
            totalPrice += Number(row.find('td').last().text())
        }).then(()=>{
            cy.log(totalPrice)
            expect(totalPrice).to.eq(90)
        })
    })

    it.only('totalprice from letKodeit table',function(){
        cy.visit('https://www.letskodeit.com/practice')
        let totPrice = 0
        cy.get('tbody > tr').find('td.price').each((el)=>{
            //cy.get('td.price').each((el)=>{ // this is creating error don't write this
                totPrice += Number(el.text())
            }).then(()=>{
                cy.log(totPrice)
                expect(totPrice).to.eq(90)
            //}) // This is related to above
        })
    })
})