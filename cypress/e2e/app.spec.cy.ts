/**
 * Tax-Bracket tests
 */

const GROSS_INCOME = '100000'
const onTheHomePage = () => {
  cy.visit('http://localhost:3000')
}

const setGrossIncome = (income: string) => {
  cy.get('input#gross-income').should('exist')
  cy.get('input#gross-income').type(income)
}

describe('Tax-Bracket Calculator page tests', () => {
  it('should have h1 containing "Tax-Bracket Calculator"', () => {
    // given
    onTheHomePage()
    // when, then
    cy.get('h1').contains('Tax-Bracket Calculator')
  })

  it('should have h2 containing "Total Taxes"', () => {
    // given
    onTheHomePage()
    // when, then
    cy.get('h2').contains('Total Taxes')
  })

  it('should calculate total taxes', () => {
    // given
    onTheHomePage()
    // when
    setGrossIncome(GROSS_INCOME)
    cy.get('#total-taxes').should('contain', '$29,523.84')
  })

  it('should calculate the effective tax rate', () => {
    // given
    onTheHomePage()
    // when
    setGrossIncome(GROSS_INCOME)
    // then
    cy.get('#effective-tax-rate').should('contain', '29.52%')
  })
})

describe('State Taxes checks', () => {
  it('should calculate CA state taxes', () => {
    // given
    onTheHomePage()
    // when
    setGrossIncome(GROSS_INCOME)
    // then
    cy.get('#state-taxes').should('contain', '$6,168.68')
  })

  it('should calculate CA state tax rate', () => {
    // given
    onTheHomePage()
    // when
    setGrossIncome(GROSS_INCOME)
    // then
    cy.get('#state-tax-rate').should('contain', '6.17%')
  })
})

describe('Federal Taxes checks', () => {
  it('should calculate Federal taxes', () => {
    // given
    onTheHomePage()
    // when
    setGrossIncome(GROSS_INCOME)
    // then
    cy.get('#federal-taxes').should('contain', '$14,605.16')
  })

  it('should calculate Federal tax rate', () => {
    // given
    onTheHomePage()
    // when
    setGrossIncome(GROSS_INCOME)
    // then
    cy.get('#federal-tax-rate').should('contain', '14.61%')
  })
})

