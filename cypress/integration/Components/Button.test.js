describe('Button', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should be true', () => {
        cy.get('.navigation').within(() => {
            cy.get('.button-container').should('be.visible')
            cy.get('p').contains('Home').should('be.visible')
            cy.get('p').contains('Options').should('be.visible')
            cy.get('p').contains('Help').should('be.visible')
            cy.get('p').contains('Bathroom').should('be.visible')
        })
    })
})