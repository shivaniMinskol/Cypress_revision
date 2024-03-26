///<reference types = "cypress"/>


describe('validate the login page',function(){

    it('login with valid credentials',function(){
        // arrangment
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // actions
        cy.get('input[name="username"]').type('Admin')

        cy.get('input[name ="password"]').type('admin123')

        cy.get('button[type="submit"]').click()

        // Assertion

        cy.get('.oxd-topbar-header-title').should('be.visible')

    })
})