
describe('Test Trending Events', () =>
{
    for (let i = 0; i < 10; i++){
        //Cypress.Commands.add('visit_any_Event', () => { 
        it('Buy Event tickects',function(){
            //visit event
            cy.wait(5000)
            cy.visit("http://phoenixdao-events-dapp.herokuapp.com/event/Food-something-2/33")
            //idk
            //cy.get(".MuiTypography-root MuiTypography-h6").click()
            //Click on Buy ticket 
            cy.wait(5000)
            cy.contains('Buy Ticket').should('be.visible')
            cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
            //confirm 
            cy.wait(2000)
            //cy.contains(' Buy Ticket').should('be.visible').click()
            cy.get('.jss63 > .MuiButton-label').click()
            cy.wait(2000)
                //cy.xpath('//*[@id="page-content-wrapper"]/div/div/div[1]/div/div/div[2]/div[2]/button/span[1]').click()
            cy.wait(5000)
        })
    }
})