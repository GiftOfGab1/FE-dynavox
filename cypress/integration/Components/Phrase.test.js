describe('Phrase', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('it should render a phrase', () => {
        cy.get('.sub-category-container').contains('Bank').click()
        cy.get('.sub-category-container').contains('Greetings').click()
        cy.get('.phrase-container').contains('Hello').should('be.visible')
        cy.get('.phrase-container').contains('Good Morning').should('be.visible')
        cy.get('.phrase-container').contains('Good Afternoon').should('be.visible') 
        cy.get('.phrase-container').contains('Good Evening').should('be.visible')  
    })
})