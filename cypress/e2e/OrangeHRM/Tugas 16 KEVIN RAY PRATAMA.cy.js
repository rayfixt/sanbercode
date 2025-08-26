describe ('Scenario Login', () => {
    it ('TC001-Login dengan Credential Valid',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         //Isi username dan password yang valid
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        cy.get('[name="password"]').type('admin123')

        //Intercept permintaan login
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('LoginRequest')

        //Action Login
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()

        //Tunggu Respon dari Request Login
        cy.wait('@LoginRequest').its('response.statusCode').should('eq', 200)

        //Assertion Sudah Login
        cy.url().should('include', 'dashboard')
    })
})