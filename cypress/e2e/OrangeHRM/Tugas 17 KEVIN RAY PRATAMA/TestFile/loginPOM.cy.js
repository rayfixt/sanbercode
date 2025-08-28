import loginPage from "../support/pageObjects/loginPage"
import loginData from "../fixtures/loginData.json"

describe ('Scenario Login', () => {
    it ('TC001-Login dengan Credential Valid',() => {
        //Visit Halaman Web
        loginPage.visitPage() 
        
         //Isi Valid Usernamme
        loginPage.inputUsername(loginData.validUsername)
        
        //Isi Valid Password
        loginPage.inputPassword(loginData.validPaassword)
        
        //Intercept permintaan login
        loginPage.interceptLogin()
        
        //Action Login
        loginPage.actionLogin()
        
        //Intercept Login
        loginPage.verifyIntercept()
        
        //Assertion Sudah Login
        loginPage.assertionLogin()
    })
})