/* eslint-disable no-undef */
describe('display list of series', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://content.viaplay.se/pc-se/serier/samtliga',
      response: 'fx:list_of_series_response.json',
    })
    cy.visit('/')
  })

  it('successfully view all series', () => {
    cy.get('[data-cy= "index"]').within(() => {
      cy.get('>div').each((_, index) => {
        cy.get('[data-cy= "image"]').should('exist')
      })
    })
  })
})
