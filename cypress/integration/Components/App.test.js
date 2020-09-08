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

  it('should render the sub-category page', () => {
    cy.get('.sub-category-container').should('be.visible')
  })
})
