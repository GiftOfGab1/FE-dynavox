describe('ChooseVoiceFrom', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should render the nav bar', () => {
    cy.get('.navigation').should('be.visible') 
  })

  it('should render the header', () => {
    cy.get('.header').contains('Gift of Gab').should('be.visible')
  })

  it('should render the main page', () => {
    cy.get('.main-page-container').should('be.visible')
  })

  it('should change the route when the Options button is clicked', () => {
    cy.get('.navigation').within(() => {
      cy.get('button').contains('Options').click()
    })

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/choose-voice')
    })
    cy.get('.choose-voice-form').within(() => {
      cy.get('.text-input').type('Howdy')
      cy.get('.dropdown-input')
    })

  })
})
