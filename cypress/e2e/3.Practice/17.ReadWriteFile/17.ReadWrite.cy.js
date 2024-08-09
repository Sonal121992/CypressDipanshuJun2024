/// <reference types = 'cypress'/>

describe('Read write operation in cypress',function(){
    it('Read Write Operation 1', function(){
        let str1 = 'Novika'
        let str2 = 'Khante'
        // reading the file
        cy.readFile('C:/Sonal/Minskole/CypressDipanshuJun2024/cypress/e2e/3.Practice/17.ReadWriteFile/File/InfoText .txt').then((data)=>{
            cy.log(data)
        })

        //Writing in file
        cy.writeFile('C:/Sonal/Minskole/CypressDipanshuJun2024/cypress/e2e/3.Practice/17.ReadWriteFile/File/InfoText .txt',str1)
        //cy.writeFile('C:/Sonal/Minskole/CypressDipanshuJun2024/cypress/e2e/3.Practice/17.ReadWriteFile/File/InfoText .txt',str2)
        cy.readFile('C:/Sonal/Minskole/CypressDipanshuJun2024/cypress/e2e/3.Practice/17.ReadWriteFile/File/InfoText .txt').then((data)=>{
            cy.log(data)
        })
    })

    it.only('Read Write Flipkart',function(){
        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.writeFile('cypress/e2e/3.Practice/17.ReadWriteFile/File/infoExel.csv',`Name, Price \n`)
        cy.get('[class="yKfJKb row"]').each((el)=>{
            let name = el.find('[class="KzDlHZ"]').text()
            let price = el.find('[class="Nx9bqj _4b5DiR"]').text().replace('₹',"").replace(',',"")
            if(price < 70000){
                cy.writeFile('cypress/e2e/3.Practice/17.ReadWriteFile/File/infoExel.csv',`"${name}", "${price}" \n`,{flag: 'a+'})
                // a+ is for increment
            }
            //cy.log(price)
        })
    })
})