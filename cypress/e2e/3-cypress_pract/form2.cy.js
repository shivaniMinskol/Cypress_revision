///<reference types = "cypress"/>

describe('verify webdriver university page',function(){

    it('validate form with valid credentials',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Shivani')
        cy.get('input[name="last_name"]').type('Hedau')
        cy.get('input[name="email"]').type('shivanihedau27@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning cypress')

        cy.get('input[type="submit"]').click()

        cy.get('h1').should('have.text',"Thank You for your Message!")

    })
})