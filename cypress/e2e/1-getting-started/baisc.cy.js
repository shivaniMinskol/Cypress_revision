///<reference types = "cypress"/>

describe('verify login page of orangeHRM site',function(){
    it('verify login page with valid credentials',function(){

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get("a[class='login']").click()


        cy.get('#email_create').type('shivanihedau27@gmail.com')
        cy.get('#SubmitCreate').click()

        cy.url().should('contain','account-creation')
    })
})
 
cy.log('hi shivani') 



