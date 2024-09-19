///<reference types = "cypress"/>

import myPage from "../Page/3.OrangeHRM"
import data from "../../../../fixtures/OrangeHrm.json"

describe("Orange HRM Login",()=>{

    let orangePage = new myPage()

    data.forEach((el)=>{
        it('Login with Data',()=>{
            orangePage.loginPage(el.un,el.pw)
        })
    })
})