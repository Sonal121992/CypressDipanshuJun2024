///<reference types = "cypress"/>


// GET ===> retrive ==> 200
// POST ===> create ===> 201
// PUT ===> update ===> 200
// DELETE ===> delete ===> 204 

describe('Verify API Testing in Cypress GoRest',function(){
    const Token = '5e89f713ffcbb2db50997ed65b29b2c83491fc8cf94143d13e86e80e90c788c0'

    it('GoRest-Get request - retrive',function(){
        cy.request({
            method: 'GET',
            url: '/public/v2/users', //set baseUrl : 'https://gorest.co.in/' in config.js
            headers: {
                Authorization: `Bearer ${Token}`
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body[0]).to.have.keys('id','name','email','gender','status')
        })
    })

    it('gorest e2e -POST/PUT/DELETE request',()=>{
        cy.request({
            method : 'POST',
            url : '/public/v2/users',
            body : {
                "name" : "Chetan Khante", 
                "gender" : "male", 
                "email" : `chetanK${Math.floor(Math.random()*1000)}@gmail.com`, 
                "status" : "active"
            },
            headers : {
                Authorization : `Bearer ${Token}`
            }
        }).then((resP)=>{
            //cy.log(resP)
            //cy.log(resP.body.id)
            expect(resP.status).to.eq(201)
            expect(resP.body).to.have.keys('id','name','email','gender','status')
            return resP.body.id
        })
        .then((id)=>{
            cy.request({
                method: 'PUT',
                url: `/public/v2/users/${id}`,
                body: {
                    "name": "Sonal",
                    "email": `chetanK${Math.floor(Math.random()*1000)}@gmail.com`,
                    "status": "active"
                },
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            }).then((resU)=>{
                cy.log(resU)
                expect(resU.status).to.eq(200)
                expect(resU.body.name).to.eq('Sonal')
                return
            }).then(()=>{
                cy.request({
                    method: 'DELETE',
                    url: `/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                }).then((resD)=>{
                    cy.log(resD)
                    expect(resD.body).to.eq('')
                    expect(resD.status).to.eq(204)
                })
            })
        })
    })
})