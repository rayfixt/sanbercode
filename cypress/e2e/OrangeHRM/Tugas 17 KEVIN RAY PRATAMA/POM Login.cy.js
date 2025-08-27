import loginPage from cypress\e2e\OrangeHRM\Tugas 17 KEVIN RAY PRATAMA\loginPage.js;
import loginData from cypress\e2e\OrangeHRM\Tugas 17 KEVIN RAY PRATAMA\loginData.json;

describe ('Scenario Login OrangeHRM', () => {
    beforeEach (() => {
        loginPage.visit();
    });
    it ('SuccessLogin',() => {
        loginPage.inputUsername (loginData.validUsername)
        loginPage.inputPassword (loginData.validPassword)
        loginPage.login_btn ()
        loginPage.verifyLoginSuccess ()
    })

    it ('FailedLogin - InvalidUsername'), () => {
        loginPage.inputUsername (loginData.invalidUsername)
        loginPage.inputPassword (loginData.validPassword)
        loginPage.login_btn ()
        loginPage.verifyUseramePasswordError ()
    })