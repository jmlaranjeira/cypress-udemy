const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1eug8c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  // Custom
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000
});
