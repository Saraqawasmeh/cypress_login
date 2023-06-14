const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },chromeWebSecurity:false,
    specPattern:['cypress/integ/ex/standered_user.js','cypress/integ/ex/problem_user.js','cypress/integ/ex/locked_out.js']
  },
});
