///<reference types = "cypress"/>

describe('validate contact us form',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('verify formdetails with valid code',function(){
        cy.formdetails("shivani","hedau","shivanihedau01@gmail.com","learning cypress")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')
    })
    it('verify formdetails with invalid email code',function(){
        cy.formdetails("shivani","hedau","shivanihedau01@gmail","learning cypress")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Invalid email address')
    })
    it('verify formdetails click on reset',function(){
        cy.formdetails("shivani","hedau","shivanihedau01@gmail.com","learning cypress")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text',"")
    }) 
})