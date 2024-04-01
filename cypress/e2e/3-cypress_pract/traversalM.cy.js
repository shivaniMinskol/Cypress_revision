///<reference types = "cypress"/>

describe('verify travers method',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    it('verify first()',function(){
        cy.get('.traversal-food-list').children().should('have.length',11)
        cy.get('.traversal-food-list').children().first()

    })

    
    it('verify first()',function(){
        cy.get('#coffee').should('have.text','Coffee')
    })

    it('verify first()',function(){
        cy.get('#coffee').then(function(el){
            // cy.log(el)
           cy.log( el.text())
           expect(el.text()).to.eq('Coffee')
        })
    })

    it('verify last()',function(){
        let li = ['Coffee','Tea','Milk','Espresso','Sugar']
        // cy.get('.traversal-food-list').children().last()
        cy.get('.traversal-drinks-list').children().each(function(el,index,arr){
            cy.log(el.text())
            expect(el.text()).to.eq(li[index])
        })
    })

    it('verify next()',function(){
        cy.get('#veggie').next().should('have.text','Asparagus')
    })

    it.only('verify prev()',function(){
        cy.get('#veggie').prev().should('have.text','Figs')
        // cy.screenshot()
        cy.title().should('contain','WebDriver | Data Tables')
        cy.reload()
    })

    



})