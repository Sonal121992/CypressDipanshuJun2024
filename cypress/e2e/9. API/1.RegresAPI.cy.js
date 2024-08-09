///<reference types = "cypress"/>

// CURD Operation ==> create, update, retrive, delete

// GET ===> retrive
// POST ===> create
// PUT ===> update
// DELETE ===> delete

import user1 from "../../fixtures/APIPost-Regres1.json"
import user2 from "../../fixtures/APIPost-Array-Regres.json"

describe('Verify API testing in cypress',function(){

    it('Regres-GET request means retrive',function(){
        cy.request({
            url: 'https://reqres.in/api/users?page=2', // we get url from regres app
            method: "GET" // first going for GET method
        }).then((res)=>{
            cy.log(res) // In this we will get whole log after doing inspect the console then click on log of run.
            // under the body we will get whole data.
            cy.log(res.body.data[0].first_name)
            expect(res.body.data[0].first_name).to.eq('Michael')//assertion
            expect(res.status).to.eq(200)//assertion
            expect(res.statusText).to.eq('OK')//assertion
        })
    })

    it('Regres-POST request means create',function(){
        let user = {
            "name": "Sonal",
            "job": "Automation Tester"
            }
        cy.request({
            url:'https://reqres.in/api/users',
            method: "POST",
            //body: user, // This is when we take user from pre-defined just before cy.request
            //Now will import from fixture file.
            body: user1 // imported from fixture
        }).then((res)=>{
            cy.log(res)
            // expect(res.body.name).to.eq('Sonal')
            //expect(res.body1.name).to.eq(user.name)
            // createdAt: "2024-08-09T04:39:38.756Z"
            // id: "880"
            // job: "Automation Tester"
            // name: "Sonal"
            expect(res.body.name).to.eq(user1.name)
            expect(res.status).to.eq(201)
            expect(res.statusText).to.eq("Created")
            // createdAt: "2024-08-09T04:47:47.693Z"
            // id: "995"
            // job: "Manager"
            // name: "Chetan"
        })
    })

    // In the above POST program we are not able to do testing for 2 entries.
    // Therefore we will make fixture file which will have data in the form of array.
    // Then with the help of forEach method we will execute testcase for multiple entries.

    user2.forEach((el)=>{
        it(`Regres POST request2 (create) for ${el.name}`,function(){
            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: el
            }).then((res)=>{
                cy.log(res)
                // expect(res.body.name).to.eq('Sonal') 

                // This will get satisfied for 1st data, but this will not get satisfied for 2nd and 3rd data
                // Therefore this will through error 

                // expect(res.body.name).to.eq(user.name)
                // expect(res.body.name).to.eq(user1.name)

                // If we do coding like above then this will get error for other assertions.
                // Therefore we will use el instead of user

                expect(res.body.name).to.eq(el.name) // Now this will give proper result

                expect(res.status).to.eq(201)
                expect(res.statusText).to.eq("Created")
            })
        })
    })
})