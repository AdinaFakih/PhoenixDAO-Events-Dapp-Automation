describe('Test Suite Name',function()
{
    it('Test Case Title',function(){
        cy.visit("http://phoenixdao-events-dapp.herokuapp.com/")
    
    })

    Cypress.Commands.add('visit_Create_Events', () => { 
        //Click on Create Event in Side bar
        cy.get(":nth-child(1) > .nav-link > .fa").click()
        cy.contains('Create Event').should('be.visible')
        cy.title().should('be.equal','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    })
})