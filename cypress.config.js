const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: '1eug8c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: ['cypress/integration/examples/*.js', 'cypress/integration/greenkart/*.js', 'cypress/integration/examples/BDD/*.feature']
  },
  // Custom
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    // openMode: 0
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  
});
