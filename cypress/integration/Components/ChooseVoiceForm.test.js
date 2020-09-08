describe('ChooseVoiceFrom', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should render the form', () => {
        cy.get('.choose-voice-form')
    })
})