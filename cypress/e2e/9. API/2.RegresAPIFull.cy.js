///<reference types = "cypress"/>

import data1 from '../../fixtures/APIPost-Regres1.json' // for single data
import data2 from '../../fixtures/APIPost-Array-Regres.json' // for array of multiple data

describe('Verify API testing in cypress',function(){
    
    it('Regres-GET request to retrive data',function(){
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        }).then((res1)=>{
            cy.log(res1)
            expect(res1.body.data[0].first_name).to.eq('Michael')
            expect(res1.status).to.eq(200)
        })
    })

    it('Regres-POST request to create',function(){
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: data1
        }).then((res2)=>{
            cy.log(res2)
            expect(res2.body.name).to.eq(data1.name)
            expect(res2.status).to.eq(201)
            expect(res2.statusText).to.eq("Created")
        })
    })

    data2.forEach((el)=>{
        it(`Regres-POST request to create ${el.name}`,function(){
            cy.request({
                url: "https://reqres.in/api/users",
                method: "POST",
                body: el
            }).then((res3)=>{
                cy.log(res3)
                expect(res3.body.name).to.eq(el.name)
                expect(res3.status).to.eq(201)
            })
        })
    })

    it('Regres-PUT request to update',function(){
        cy.request({
            url:"https://reqres.in/api/users/2",
            method:"PUT",
            body:{
                "name": "Kartik",
                "job": "Python"
            }
        }).then((res4)=>{
            cy.log(res4)
            expect(res4.body.name).to.eq("Kartik")
            expect(res4.status).to.eq(200)
        })
    })

    it('Regres-DELETE request to delete',function(){
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE"
        }).then((res5)=>{
            cy.log(res5)
            expect(res5.body).to.eq("")
            expect(res5.status).to.eq(204)
            expect(res5.statusText).to.eq("No Content")
        })
    })
})