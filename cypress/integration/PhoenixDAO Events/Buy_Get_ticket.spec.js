Cypress.Commands.add('visit_any_Event', () => { 
    cy.get(".MuiTypography-root MuiTypography-h6").click()
    cy.contains('Buy Ticket').should('be.visible').click()
    cy.xpath('//*[@id="page-content-wrapper"]/div/div/div[1]/div/div/div[2]/div[2]/button/span[1]').click()
})