///<reference types = 'cypress'/>

describe('Verify file upload in cypress',function(){

    it('Verify single file upload',function(){
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path1 = 'C:/Sonal/Minskole/CypressDipanshuJun2024/cypress/e2e/3.Practice/15.FileUpload/fileUpload.txt' // reverse the oblique sign from \ to /
        cy.get('#myFile').selectFile(path1)

        // Here we use cy.on because on click we get new window therefore cy.on
        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('#submit-button').click()
        cy.url().should('contain','fileUpload.txt')
    })

    it('Verify single file upload fro any file in PC',function(){
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path2 = 'C:/Sonal/Personal/Novika/St.Paul/Nursery/Colouring Sheet - Assessment 1 (1).pdf'
        //ppt upload hone me time lagta hai
        cy.get('#myFile').selectFile(path2)

        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('#submit-button').click()
        cy.url().should('contain','Colouring+Sheet+-+Assessment+1+%281%29.pdf')
    })

    it.only('Verify the multiple upload',function(){
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
        let path1 = 'C:/Sonal/Personal/Novika/St.Paul/Nursery/Colouring Sheet - Assessment 1 (1).pdf'
        let path2 = 'C:/Sonal/Personal/Novika/Kidzee Project/Action Chart (1).pdf'
        let path3 = 'C:/Sonal/Personal/Novika/Kidzee Project/Family Tree.pdf'
        cy.get('input[type="file"]').first().selectFile([path1,path2,path3])
        cy.get('[id="ember355"]').should('contain','3')
    })
})