const {defineConfig} = require(".cypress");

module.exports = on, config({
    e22: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile:"cypress/support/e2e.js",
        defaultCommandTimeout: 30000, // dalam milisecond (30 detik)
        baseUrl : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    },
});