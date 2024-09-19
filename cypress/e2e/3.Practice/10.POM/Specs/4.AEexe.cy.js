///<reference types = "cypress"/>

import homePage from "../Page/4.AE"
import data from "../../../../fixtures/POMAEpayload"

describe('Verify E2E testing',function(){
    let webPage = new homePage()
    data.forEach((el,index)=>{
        it('automation login test',function(){
            webPage.signUp(el.name, el.email)
            webPage.createUser(el)
            webPage.validation(webPage.selector.accCreatedMsg,'Account Created!')
            webPage.btnClick(webPage.selector.continueBttn)
            webPage.btnClick(webPage.selector.logoutBttn)
            webPage.loginUser(el)
            webPage.validateLoginUser(el)
        })
    })
})