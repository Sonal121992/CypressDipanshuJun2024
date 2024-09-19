const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://practice.automationtesting.in/'
    },
    env : {
        uid: 'stageTest345@gmail.com',
        pw: 'sonal@345'
    }
})