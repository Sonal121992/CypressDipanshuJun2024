///<reference types="cypress" />

import postD from "../../fixtures/GoRestFixPayload/PostGo"
import putD from "../../fixtures/GoRestFixPayload/PutGo"


describe('verify API testing in cypress-gorest with fixture', function () {
    const Token = '5e89f713ffcbb2db50997ed65b29b2c83491fc8cf94143d13e86e80e90c788c0'

    postD.forEach((el, index) => {
        it('gorest e2e -POST/PUT/DELETE request with fixture', () => {
            cy.request({
                method: 'POST',
                url: '/public/v2/users',
                body : el,
                headers : {
                    Authorization : `Bearer ${Token}`
                }
            }).then((resC)=>{
                //cy.log(resC)
                expect(resC.status).to.eq(201)
                expect(resC.body.name).to.eq(el.name)
                return resC.body.id
            }).then((id)=>{
                cy.request({
                    method : 'PUT',
                    url : `/public/v2/users/${id}`,
                    body : putD[index],
                    headers : {
                        Authorization : `Bearer ${Token}`
                    }
                }).then((resU)=>{
                    expect(resU.status).to.eq(200)
                    expect(resU.body.name).to.eq(putD[index].name)
                }).then(()=>{
                    cy.request({
                        method : 'DELETE',
                        url : `/public/v2/users/${id}`,
                        headers : {
                            Authorization : `Bearer ${Token}`
                        }
                    }).then((resD)=>{
                        expect(resD.status).to.eq(204)
                        expect(resD.body).to.eq("")
                    })
                })
            })
        })
    })
})