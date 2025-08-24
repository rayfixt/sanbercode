describe ('Scenario Lupa Pasword', () => {
    it ('TC001-Login dengan  credential valid',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-forgot').click()
        cy.get('[name="username"]').type('Admmin')
        cy.get('.oxd-button--secondary').click()
    })
})