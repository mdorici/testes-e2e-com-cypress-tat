const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://notes-serverless-app.com',
   defaultCommandTimeout: 10000,
   experimentalSessionSupport: true,
   env: {
    viewportWidthBreakpoint: 768
  },
   chromeWebSecurity: false,
   experimentalStudio: true
  }
})

