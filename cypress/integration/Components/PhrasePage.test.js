describe('ChooseVoiceFrom', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/phrases-page')
    })

    it('should be true', () => {
        cy.get('.phrase-page-container').should('be.visible')
        cy.get('.phrase-page-container').within(()=> {
            cy.get('.phrase-container').contains('Hi').should('be.visible')
            cy.get('.phrase-container').contains('Yo').should('be.visible')
            cy.get('.phrase-container').contains('Sup').should('be.visible')
            cy.get('.phrase-container').contains('Hey').should('be.visible')
        })
    })
})