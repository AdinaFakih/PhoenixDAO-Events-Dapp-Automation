
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

Cypress.Commands.add('Step1_One_day_Event', (event_name,event_organizer,date,start_time,end_time) => { 
    // cy.title().should('be.equal','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    // cy.contains('Create Event').should('be.visible')
    // cy.contains('Event Details').should('be.visible')
    cy.get("#event-name").should('be.visible').should('be.enabled').clear({force: true}).type(event_name)
    cy.get("#event-organizer").should('be.visible').should('be.enabled').clear({force: true}).type(event_organizer)
    cy.get('input[value="onedayevent"]').check().should('be.checked').and('have.value','onedayevent')
    cy.get("input[id='event-date']").click()
    cy.get("input[id='event-date']").should('be.visible').should('be.enabled').type(date)
    cy.get("input[id='start-time-picker']").should('be.visible').should('be.enabled').type(start_time)
    cy.get("input[id='end-time-picker']").should('be.visible').should('be.enabled').type(end_time)
    cy.get(".jss25 > .MuiButton-contained > .MuiButton-label").click() 
})

Cypress.Commands.add('Step1_More_than_a_day', (event_name,event_organizer,start_date,end_date,to,from) => { 
    // cy.title().should('eq','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    // cy.contains('Create Event').should('be.visible')
    // cy.contains('Event Details').should('be.visible')
    cy.get("#event-name").should('be.visible').should('be.enabled').clear({force: true}).type(event_name)
    cy.get("#event-organizer").should('be.visible').should('be.enabled').clear({force: true}).type(event_organizer)
    cy.get('input[value="morethanaday"]').check().should('be.checked').and('have.value','morethanaday')
    cy.xpath("//body[@classname='background']/div[@id='root']/div[@id='wrapper']/div[@id='page-content-wrapper']/div[@class='page-wrapper-inner']/div[@class='container']/div[@class='retract-page-inner-wrapper']/div[@class='home-wrapper']/div[@class='row']/div[@class='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12']/div[@class='jss21']/div[@class='jss26']/div/div/div/div/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/*[1]").click()
    //click on calendar icon
    //cy.get(':nth-child(1)>:nth-child(1)>.MuiFormControl-root>.MuiInputBase-root>.MuiInputAdornment-root>.MuiButtonBase-root>.MuiIconButton-label>.MuiSvgIcon-root').click()
    //select date in calendar 
    //cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
    // cy.wait(2000)
    // //cy.get(':nth-child(4) > :nth-child(3) > .MuiButtonBase-root').click
    // cy.wait(2000)
    // // cy.get(":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #date-picker-inline").type(start_date)
    // // cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #date-picker-inline").type(end_date)
    // cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #date-picker-inline").click()
    // //.type(to)
    // cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    // cy.get(":nth-child(2) > .MuiInputBase-root > #time-picker").type(from)
    cy.get(".jss25 > .MuiButton-contained > .MuiButton-label").click()
})

Cypress.Commands.add('Step2_Physical_Event', (event_location) => { 
    cy.title().should('eq','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    cy.contains('Create Event').should('be.visible')
    cy.contains('Event Details').should('be.visible')
    cy.get("input[id='event-location']").should('be.visible').should('be.enabled').type(event_location)
    cy.get("//span[contains(text(),'Browse')]").should('be.visible').should('be.enabled').clear({force: true}).type(event_organizer)
    cy.wait(6000)
    cy.get('input[value="morethanaday"]').check().should('be.checked').and('have.value','morethanaday')
})

