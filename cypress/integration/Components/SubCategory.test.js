describe('ChooseVoiceFrom', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should render each sub-category container', () => {
        cy.get('.sub-category-container').within(() => {
            cy.get('.emoji-background')
            cy.get('h4').contains('Bank').should('be.visible')
            cy.get('h4').contains('Party').should('be.visible')
        })
    })
})