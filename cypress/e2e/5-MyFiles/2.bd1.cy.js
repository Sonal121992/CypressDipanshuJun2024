///<reference types="cypress"/>
describe('', () => {
    it('', () => {
        const dbName = 'stagingA'
 const query = 'select * from company'
        cy.task('queryDatabase', { dbName, query })
        .then((op)=>{
            cy.log(op)
        });
    });
});



// // in test
// const dbName = 'stagingA'
// const query = 'SELECT * FROM users'

// cy.task('queryDatabase', { dbName, query })  