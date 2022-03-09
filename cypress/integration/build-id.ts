if (Cypress.config('baseUrl').includes('localhost')) {
  it('has the build id set to development', () => {
    cy.visit('/').its('__NEXT_DATA__.buildId').should('equal', 'development')
  })
} else {
  it('has the build id with the branch and the commit SHA', () => {
    cy.visit('/').its('__NEXT_DATA__.buildId').should('match', /^[a-z]+:::[a-z0-9]{40}$/)
  })
}
