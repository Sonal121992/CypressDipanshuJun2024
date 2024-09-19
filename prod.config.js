const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl:'https://practice.automationtesting.in/'
    },
    env : {
        uid:'productionTest1995@gmail.com',
        pw :'sonal@1995'
        
    }

})