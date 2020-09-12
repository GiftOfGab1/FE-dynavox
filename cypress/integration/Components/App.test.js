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

  // it('should render the main page', () => {
  //   cy.get('.main-page-container').should('be.visible')
  // })
})
