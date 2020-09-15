describe('ChooseVoiceFrom', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should render the home button', () => {
        cy.get('p').contains('Home').should('be.visible')
        cy.get('p').contains('Options').should('be.visible')
        cy.get('p').contains('Help').should('be.visible')
        cy.get('p').contains('Bathroom').should('be.visible')

    })
})