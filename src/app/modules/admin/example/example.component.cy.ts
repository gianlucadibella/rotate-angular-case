import { ExampleComponent } from './example.component'

describe('Example Component', () => {
  it('mounts', () => {
    cy.mount(ExampleComponent)
  })

  it('Initiative should be accepeted', () => {
    cy.mount(ExampleComponent)
    cy.get('[data-cy=accept]').first().click()
    cy.get('[data-cy=accept]').should('have.length', 2)
  })

  it('Initiative should be dimissed', () => {
    cy.mount(ExampleComponent)
    cy.get('[data-cy=dimiss]').first().click()
    cy.get('[data-cy=dimiss]').should('have.length', 2)
  })
  
  it('When an accepted initiative is dimissed it should not show up accepted initiatives section', () => {
    cy.mount(ExampleComponent)
    cy.get('[data-cy=accept]').last().click()
    cy.get('[data-cy=dimissAccepted]').first().click()
    cy.get('[data-cy=acceptedInitiatives]').should('not.exist')
  })

  it('When initiative is accepted it should show up accepted initiatives section', () => {
    cy.mount(ExampleComponent)
    cy.get('[data-cy=accept]').last().click()
    cy.get('[data-cy=acceptedInitiatives]').should('be.visible')
  })

})