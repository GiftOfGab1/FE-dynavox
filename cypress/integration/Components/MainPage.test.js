    describe('MainPage', () => {

        beforeEach(() => {
            cy.visit('http://localhost:3000/')
        })

        it('should render the sub-category page', () => {
            cy.get('.sub-category-container').should('be.visible')
        })
})