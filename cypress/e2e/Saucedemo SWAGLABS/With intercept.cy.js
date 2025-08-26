describe ('Scenario Login', () => {
    it ('Login Berhasil (Intercept LoginRequest)',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')

        //Isi username dan password yang valid
        cy.get('[data-test="username"]').type('standard_user').should('have.value', 'standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')

        //Intercept permintaan login
        cy.intercept('GET','https://www.saucedemo.com/v1/img/sauce-backpack-1200x1500.jpg').as('LoginRequest')

        //Action Login
        cy.get('#login-button').should('be.visible')
        cy.get('#login-button').click()

        //Tunggu Respon dari Request Login
        cy.wait('@LoginRequest').its('response.statusCode').should('eq', 200)

        //Assertion Sudah Login
        cy.url().should('include', 'inventory')
    })
})