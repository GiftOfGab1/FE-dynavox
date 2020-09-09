describe('ChooseVoiceFrom', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/choose-voice')
    })

    it('should render the header', () => {
        cy.get('.header').contains('Gift of Gab').should('be.visible')
    })

    it('should render the nav bar', () => {
        cy.get('.navigation').should('be.visible')
    })

    it('should render the form', () => {
        cy.get('.choose-voice-form').should('be.visible')
    })

    it('should render the form inputs', () => {
        cy.get('.choose-voice-form').within(() => {
            cy.get('label').contains('Sample Phrase').should('be.visible')
            cy.get('input').should('be.visible')
            cy.get('label').contains('Choose your voice').should('be.visible')
            cy.get('select').should('be.visible')
            cy.get('label').contains('Speed').should('be.visible')
            cy.get('h5').contains('0').should('be.visible')
            cy.get('button').contains('+').should('be.visible')
            cy.get('button').contains('-').should('be.visible')
            cy.get('button').contains('Play').should('be.visible')
            cy.get('button').contains('Save').should('be.visible')
        })
        cy.visit('http://localhost:3000/')
    })

    it('should be true', () => {
        expect(true).to.equal(true)
    })
})