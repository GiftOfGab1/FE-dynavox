describe('user login page', () => {
    
    beforeEach(()=> {
        cy.visit('http://localhost:3000/LoginPage')
    })

    it('login-form', () => {
        cy.get('.user-login-form').should('be.visible')
        cy.contains('Please Login').should('be.visible')
        cy.contains('User Name').should('be.visible')
        cy.contains('Password').should('be.visible')

        cy.get('.login-input:eq(0)').type('MeanJoeBean').should('be.visible')
        cy.get('.login-input:eq(1)').type('Is@Baller').should('be.visible')
        cy.get('.login-button').click()

        cy.get('.login-input:eq(0)').then((userName)=> {
            expect(userName.text()).eq('')
        })
        cy.get('.login-input:eq(1)').then((password) => {
            expect(password.text()).eq('')
        })
    })
    
})