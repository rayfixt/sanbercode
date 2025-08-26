describe ('Scenario Login', () => {
    it ('TC001-Login dengan Credential Valid',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')
        cy.get('.oxd-button').click().should('be.visible')
    })
})

describe ('Scenario Login', () => {
    it ('TC002-Login dengan Credential Invalid Username',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('nimda')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC003-Login dengan Credential Invalid Password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin1234')
        cy.get('.oxd-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC004-Login dengan Mengosongkan Username',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC005-Login dengan Mengosongkan Password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('.oxd-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC006-Forgot Password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.get('[name="username"]').type('Admin')
        cy.get('.oxd-button--secondary').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC007-Help/ FAQ',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC008-Support',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(2) > .oxd-userdropdown-link').click()
    })
})

describe ('Scenario Login', () => {
    it ('TC009-Ubah Password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')
        cy.get('.oxd-button--secondary').click()
    })
})