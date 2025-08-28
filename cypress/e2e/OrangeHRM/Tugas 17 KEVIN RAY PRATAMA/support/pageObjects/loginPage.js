class loginPage{
    visitPage(){
        //Buka Halaman Website Login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(username){
        //Input Username
        cy.get('[name="username"]').type(username).should('have.value', 'Admin')
    }
    inputPassword(password){
        //Input Password
        cy.get('[name="password"]').type(password)
    }
    interceptLogin(){
        //Intercept permintaan login
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('LoginRequest')
    }
    actionLogin(){
        //Klik Tombol Login
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
    }
    verifyIntercept(){
        //Tunggu Respon Login
        cy.wait('@LoginRequest').its('response.statusCode').should('eq', 200)
    }
    assertionLogin(){
        //Assertion Sudah Login
        cy.url().should('include', 'dashboard')
    }
}

export default new loginPage()