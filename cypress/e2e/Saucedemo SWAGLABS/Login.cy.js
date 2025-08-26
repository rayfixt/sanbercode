describe ('Scenario Login', () => {
    it ('TC001-Login dengan credential valid',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC002-Login dengan credential invalid username',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standar_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC003-Login dengan credential invalid password',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauced')
        cy.get('#login-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC004-Login dengan mengosongkan username',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC004-Login dengan mengosongkan password',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#login-button').click()
    })
})