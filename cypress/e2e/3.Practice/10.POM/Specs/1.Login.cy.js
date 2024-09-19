///<reference types = "cypress"/>

import homePage from "../Page/1. LoginPageSubmit";

describe('Verify Contact us Page',function(){
    let hp = new homePage()
    it('Verify Contact us page for valid data',function(){
        hp.visitUrl()
        hp.loginPage('sonal','khante','sonalkhante@gmail.com','I am learning POM')
        hp.positiveValidation()
    })
})