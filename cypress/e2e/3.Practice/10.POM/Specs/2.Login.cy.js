///<reference types = "cypress"/>

import homeP from "../Page/2. LoginPageSubmitReset"
// We can use same variable 'Descriptionpage' that we have used in 2.LoginPageSubmitReset.js
// or we can use different variable like here we use 'homeP' as well.

import arrayData from "../../../../fixtures/POMContact.json"

describe('Verify contact us page using POM Pages',()=>{
    let hp = new homeP()
    it('Contact us page',()=>{
        hp.visitUrl()
        hp.loginPage('sonal','khante','sonalkhante@gmail.com','I am learning cypress with POM')
        hp.loginSuccess()
    })

    it('Contact us page',()=>{
        hp.visitUrl()
        hp.loginPage('sonal','khante','sonalkhantegmail.com','I am learning cypress with POM for error')
        hp.loginError()
    })

    arrayData.forEach((el,index)=>{
        it(`Contact us page using fixture payload for user ${el.firstName}`,()=>{
            hp.visitUrl()
            hp.loginPage(el.firstName,el.lastName,el.email,el.msg)
            hp.loginSuccess()
        })
    })
})