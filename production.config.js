const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.automationtesting.in/',
  },
    env: {
        username: "sonalkhante@gmail.com",
        password: "dipanshu1"
    }
})