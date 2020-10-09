describe('App', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render the nav bar', () => {
    cy.get('.navigation').should('be.visible') 
  })

  it('should render the header', () => {
    cy.contains('Gift of Gab').should('be.visible')
  })

  it('should render the main page', () => {
    cy.get('.main-page-container').should('be.visible')
  })

  
  it('should change the route when the Options button is clicked', () => {
    
    cy.get('.navigation').within(() => {
      cy.contains('Options').click()
    })

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/choose-voice')
    })
  })

  it('should allow the user to select their voice settings', () => {
    
    cy.get('.navigation').within(() => {
      cy.get('p').contains('Options').click()
    })

    cy.get('.choose-voice-form').within(() => {
      cy.get('.text-input').type('Howdy')
      cy.get('.dropdown-input').select('Amy')
      cy.contains('+').click()
      cy.contains('+').click()
      cy.contains('-').click()
      cy.get('input, [value=Howdy]').should('be.visible')
      cy.contains('Amy').should('be.visible')
      cy.contains('1').should('be.visible')

    })
  })

  it('should display the subcategories when you click a social setting', () =>{
    cy.get('.sub-category-container').contains('Bank').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/subCategories-page/Bank')
    })
  })

  it('should display the phrases when you click a social setting', () =>{
    cy.get('.sub-category-container').contains('Bank').click()
    cy.get('.sub-category-container').contains('Greetings').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/phrase-page/Bank/Greetings')
    })
  })

  it('should return to the subCategories page after a phrase is played', () =>{
    cy.get('.sub-category-container').contains('Bank').click()
    cy.get('.sub-category-container').contains('Greetings').click()
    cy.get('.phrase-container').contains('Hello').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/subCategories-page/Bank')
    })
  })

  it('should take you back to the main page when you click Back' , () => {
    cy.get('.sub-category-container').contains('Bank').click()
    cy.get('.button-container').within(() => {
      cy.get('button').contains('Back').click()
    })
  })

  it('should take you back to the main page when you click Home button' , () => {
    cy.get('.sub-category-container').contains('Bank').click()
    cy.get('.sub-category-container').contains('Greetings').click()
    cy.get('.navigation').within(() => {
      cy.get('p').contains('Home').click()
    })

    cy.url().should('eq', 'http://localhost:3000/')
  })

  it.only('should redirect to the create social setting form', function() {
    cy.get('.add-phrase-button').click()

    cy.url().should('eq','http://localhost:3000/addSocialSetting')

    cy.get('.phrase-input:eq(0)').type('Grocery Store').should('be.visible')
    cy.get('#icon-select').select('👋hello').should('be.visible')
    cy.contains('Save').click()

    cy.url().should('eq', 'http://localhost:3000/')

  })
})
