
Cypress.Commands.add('visit_Events_Dapps', () => { 
    //Website Address
    cy.visit("http://phoenixdao-events-dapp.herokuapp.com/")
    //Assertion
    cy.title().should('be.equal','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.') 
})

Cypress.Commands.add('visit_Create_Events', () => { 
    //Click on Create Event in Side bar
    cy.get(":nth-child(1) > .nav-link > .fa").click()
    cy.contains('Create Event').should('be.visible')
    cy.title().should('be.equal','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
})

Cypress.Commands.add('Create_Event_Form', () => { 
    cy.url().should('include','createevent')
    cy.Step1_One_day_Event()
    cy.Step1_More_than_a_day()
    
})

Cypress.Commands.add('Step1_One_day_Event', (event_name,event_organizer) => { 
    cy.title().should('be.equal','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    cy.contains('Create Event').should('be.visible')
    cy.contains('Event Details').should('be.visible')
    cy.get("#event-name").should('be.visible').should('be.enabled').clear({force: true}).type(event_name)
    cy.get("#event-organizer").should('be.visible').should('be.enabled').clear({force: true}).type(event_organizer)
    cy.wait(6000)
    cy.get('input[value="onedayevent"]').check().should('be.checked').and('have.value','onedayevent')
})

Cypress.Commands.add('Step1_More_than_a_day', (event_name,event_organizer) => { 
    cy.title().should('eq','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    cy.contains('Create Event').should('be.visible')
    cy.contains('Event Details').should('be.visible')
    cy.get("#event-name").should('be.visible').should('be.enabled').clear({force: true}).type(event_name)
    cy.get("#event-organizer").should('be.visible').should('be.enabled').clear({force: true}).type(event_organizer)
    cy.wait(6000)
    cy.get('input[value="morethanaday"]').check().should('be.checked').and('have.value','morethanaday')
})