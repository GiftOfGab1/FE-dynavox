describe('SubCategoryPage', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should render the subCategory page', () => {
        cy.get('.sub-category-container').contains('Bank').click()
        cy.get('.phrase-page-container').should('be.visible')
        cy.get('.sub-category-container').contains('Greetings').should('be.visible')
        cy.get('.sub-category-container').contains('Common').should('be.visible')
        cy.get('.sub-category-container').contains('Transactions').should('be.visible')
        cy.get('.sub-category-container').contains('Goodbyes').should('be.visible')
        cy.get('button').contains('Back').should('be.visible')
    })
})