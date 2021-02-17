/// <reference types="cypress" />



describe('Turing Cafe', () => {
  beforeEach(() => {
    cy.fixture('reservations.json')
      .then((reservations) => {
        cy.intercept('GET', 
        'http://localhost:3001/api/v1/reservations',
          { statusCode: 200,
            body: reservations.reservations
          })
        })
    cy.visit('http://localhost:3000')
  })

  it('should display a title', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('should display a reservation form', () => {
    cy.get('form').children('.name-input', '.date-input', '.time-input', '.num-input', '.form-button')
  })

  it('should display reservation cards', () => {
    cy.get('.reservations').children('.res')
      .get('.res:first').children('.name', '.date', '.time', '.num', '.cancel-button')
      .get('.name').contains('Christie')
      .get('.date').contains('12/29')
      .get('.time').contains('7:00')
      .get('.num').contains('Number of Guests:12')
  })

  it('should let users cancel a reservation', () => {
    cy.get('.reservations').children('.res')
      .get('.res:first').children('.cancel-button')
      // .get('.cancel-button').click({multiple: true})
  })

  it('should let users make a reservation', () => {
    cy.get('form').children('.form-button')
      // .get('.form-button').click()
  })

})