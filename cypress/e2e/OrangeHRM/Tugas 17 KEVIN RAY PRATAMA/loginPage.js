class loginPage{
    visit() {
        //Buka Halaman Website Login
        cy.visit('/index.php/auth/login')
    }
    inputUsername(username){
        cy.get('[name="username"]').type(username)
    }
    inputPassword(password){
        cy.get('[name="password"]').clear().type(password)
    }
    login_btn(){
        cy.get('.oxd-button').click()
    }
    verifyLoginSuccess(){
        cy.url().should("include", "/index.php/dashboard/index")
    }
    verifyUsernamePasswordError(){
        cy.xpath
    }
    verifyUsernameRequiredError(){
        cy.xpath
    }
    verifyPasswordRequiredError(){
        cy.xpath
    }
}
export default new loginPage()