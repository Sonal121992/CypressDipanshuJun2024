const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.automationtesting.in/',
  },
    env: {
        username: "dipanshu2@gmail.com",
        password: "dipanshu2"
    }
})