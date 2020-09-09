describe('ChooseVoiceFrom', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should render the home button', () => {
        cy.get('Button').contains('Home').should('be.visible')
        cy.get('Button').contains('Options').should('be.visible')
        cy.get('Button').contains('Help').should('be.visible')
        cy.get('Button').contains('Bathroom').should('be.visible')

    })
})