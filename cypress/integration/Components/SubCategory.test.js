describe('ChooseVoiceFrom', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should render each sub-category container', () => {
        cy.get('.sub-category-container').within(() => {
            cy.get('.sub-category-image')
            cy.get('p').contains('Bank').should('be.visible')
            cy.get('p').contains('Grocery Store').should('be.visible')
        })
    })
})