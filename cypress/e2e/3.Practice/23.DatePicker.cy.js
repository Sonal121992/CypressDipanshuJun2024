///<reference types = "cypress"/>

describe('Verify Date picker functionality',function(){

    it('Verify date picker functionality for date',function(){
        // For CUrrent Date
        let todayDate = new Date()
        cy.log(`todayDate ${todayDate}`)

        let todayDate2 = todayDate.getDate()
        cy.log(`todayDate ${todayDate2}`)

        let todayMonth = todayDate.getMonth()
        cy.log(`todayDate ${todayMonth+1}`)

        let todaymonthShort = todayDate.toLocaleString("default",{month:"short"})
        cy.log(`todaymonthS ${todaymonthShort}`)

        let todaymonthLong = todayDate.toLocaleString("default",{month:"long"})
        cy.log(`todaymonthL ${todaymonthLong}`)

        let todayYear = todayDate.getFullYear()
        cy.log(`todayYear ${todayYear}`)

    })

    it.only('Verify date picker functionality for future Date pick',function(){

        // FOr future Date
        let DateFut = new Date()
        DateFut.setDate(DateFut.getDate()+30)

        cy.log(`DateFut ${DateFut}`)//Oct 1 2024 ===> because today is 1st Sept

        let dateFut2 = DateFut.getDate()
        cy.log(`dateFut2 ${dateFut2}`)//1

        let monthFut = DateFut.getMonth()
        cy.log(`monthFut ${monthFut+1}`) // +1 because of index values // 10

        let monthFuts = DateFut.toLocaleString("default",{month:"short"})
        cy.log(`monthFuts ${monthFuts}`)// Oct ==> Since here we want month name no need of +1 index

        let monthFutL = DateFut.toLocaleString("default",{month:"long"})
        cy.log(`monthFutL ${monthFutL}`)// October

        let yearFut = DateFut.getFullYear()
        cy.log(`yearFut ${yearFut}`)//2024

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()
        function selectYearMonth(){
            cy.get('.datepicker-switch').first().then(function(currentDate){
                cy.log(currentDate.text())// Will get todays date
                if(!currentDate.text().includes(DateFut.getFullYear())){
                    cy.get('.next').first().click()
                    selectYearMonth()
                }
            }).then(function(){
                cy.get('.datepicker-switch').first().then(function(currentDate){
                    if(!currentDate.text().includes(DateFut.toLocaleString("default",{month:'long'}))){
                        cy.get('.next').first().click()
                    selectYearMonth()
                    }
                })
            })
        }
        function selectDate(){
            cy.get('[class="day"]').contains(dateFut2).click()// will click on 1st Oct 2024 which is 30 days from today
        }
        selectYearMonth()
        selectDate()
    })
})