import 'cypress-file-upload'

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

// Cypress.Commands.add('Create_Event_Form', () => { 
//     cy.url().should('include','createevent')
//     cy.Step1_One_day_Event()
//     cy.Step2_Physical_Event()
// })

Cypress.Commands.add('Wallet_Restrict', () => { 
    cy.get('input[name="checkedB"]').check().should('be.checked')
})

Cypress.Commands.add('Next', () => { 
    cy.get('.jss47 > .MuiButton-contained > .MuiButton-label').should('be.visible').click() 
})

Cypress.Commands.add('Step1_One_day_Event', (event_name,event_organizer,date) => { 
    cy.title().should('be.equal','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    cy.contains('Create Event').should('be.visible')
    cy.contains('Event Details').should('be.visible')
    cy.get("#event-name").should('be.visible').should('be.enabled').clear({force: true}).type(event_name)
    cy.get("#event-organizer").should('be.visible').should('be.enabled').clear({force: true}).type(event_organizer)
    cy.get('input[value="onedayevent"]').check().should('be.checked').and('have.value','onedayevent')
    //Click on calendar icon
    cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    //click on date
    //cy.xpath("//body/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[5]/div["+ date +"]/button[1]/span[1]/p[1]").should('be.visible').click()
    cy.get(':nth-child(5) > :nth-child(5) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').click()
    //click on clock icon for Start time
    cy.get('[style="display: flex; justify-content: space-between;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    //Click on OK button for Start time
    cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').should('be.visible').click()
    //click on clock icon for End time
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').should('be.visible').click()
    cy.wait(2000)
    cy.xpath('/html/body/div[3]/div[3]/div/div[1]/div/div[1]/div[1]/button[1]/span[1]/h2').type(3)
    //click on OK for end time
    cy.wait(3000)
    cy.get('.MuiDialogActions-root > :nth-child(2)').should('be.visible').click()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step1_More_than_a_day', (event_name,event_organizer) => { 
    cy.title().should('eq','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    cy.contains('Create Event').should('be.visible')
    cy.contains('Event Details').should('be.visible')
    cy.get("#event-name").should('be.visible').should('be.enabled').clear({force: true}).type(event_name)
    cy.get("#event-organizer").should('be.visible').should('be.enabled').clear({force: true}).type(event_organizer)
    cy.get('input[value="morethanaday"]').check().should('be.checked').and('have.value','morethanaday')     
    //Click on calander icon for Start date 
    cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').should('be.visible').click()
    //Click on Start date
    cy.xpath("/html/body/div[2]/div[3]/div/div/div[2]/div/div[4]/div[3]/button/span[1]/p").should('be.visible').click()
    //Click on calendar icon for End date 
    cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').should('be.visible').click()
    //Click on End date
    cy.xpath("/html/body/div[2]/div[3]/div/div/div[2]/div/div[4]/div[6]/button/span[1]/p").should('be.visible').click()
    //Click on Clock icon for To
    cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').should('be.visible').click()
    //Click on Ok
    cy.get('.MuiDialogActions-root > :nth-child(2)').should('be.visible').click()
    //Click on Clock icon for From
    cy.get(':nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').should('be.visible').click()
    //Click on Ok
    cy.get('.MuiDialogActions-root > :nth-child(2)').should('be.visible').click()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step2_Physical_Event', (event_location) => { 
    cy.title().should('eq','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    cy.contains('Create Event').should('be.visible')
    cy.contains('Event Details').should('be.visible')
    cy.get('input[value="physical"]').check().should('be.checked').and('have.value','physical')
    cy.get('input[value="online"]').should('not.be.checked').and('have.value','online')
    cy.get("#event-location").should('be.visible').should('be.enabled').type(event_location)
    //image
    const filepath = 'images/Xord.jpg'
    cy.get('input[type="file"]').attachFile(filepath)
     //Topic dropdown
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains('Food & Drink').click()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step2_Online_Event', (event_link,topic,filepath) => { 
    cy.title().should('eq','PhoenixDAO Events Marketplace - Buy Tickets to Events in PHNX.')
    cy.contains('Create Event').should('be.visible')
    cy.contains('Event Details').should('be.visible')
    cy.get('input[value="online"]').check().should('be.checked').and('have.value','online')
    cy.get('input[value="physical"]').should('not.be.checked').and('have.value','physical')
    cy.get("#event-link").should('be.visible').should('be.enabled').type(event_link)
    //image
    cy.get('input[type="file"]').attachFile(filepath)
    //Topic dropdown
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains(topic).click()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step3_Free_Event_unlimited', () => {
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains('Free Event').click()
    //TICKET AVAILABILITY
    cy.get('input[value="unlimited"]').check().should('be.checked').and('have.value','unlimited')
    //Restrict Wallet Address to one Ticket
    cy.Wallet_Restrict()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step3_Free_Event_limited', (no_of_tickets) => {
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains('Free Event').click()
    //TICKET AVAILABILITY
    cy.get('input[value="limited"]').check().should('be.checked').and('have.value','limited')
    //NUMBER OF TICKETS
    cy.get('input[id="outlined-basic"]').should('be.visible').should('be.enabled').type(no_of_tickets)
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step3_Paid_Single_Event_unlimited', (ticketPrice) => {
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains('Paid (Single Ticket Type Event)').click()
    //TICKET PRICE
    cy.get('#input-with-icon-textfield').should('be.visible').should('be.enabled').type(ticketPrice)
    //TICKET AVAILABILITY
    cy.get('input[value="unlimited"]').check().should('be.checked').and('have.value','unlimited')
    //Restrict Wallet Address to one Ticket
    cy.Wallet_Restrict()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step3_Paid_Single_Event_limited', (ticketPrice,no_of_tickets) => {
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains('Paid (Single Ticket Type Event)').click()
    //TICKET PRICE
    cy.get('#input-with-icon-textfield').should('be.visible').should('be.enabled').type(ticketPrice)
    //TICKET AVAILABILITY
    cy.get('input[value="limited"]').check().should('be.checked').and('have.value','limited') 
    //NUMBER OF TICKETS
    cy.get('input[id="outlined-basic"]').should('be.visible').should('be.enabled').type(no_of_tickets)
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step3_Paid_Multiple_Event_unlimited', (ticketName1,ticketName2,ticketPrice) => {
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains('Paid (Multiple Ticket Type Event)').click()
    //TICKET NAME
    cy.get('#ticket-name').should('be.visible').should('be.enabled').type(ticketName1)
    //TICKET PRICE
    cy.get('#input-with-icon-textfield').should('be.visible').should('be.enabled').type(ticketPrice)
    //TICKET AVAILABILITY
    cy.get('input[value="unlimited"]').check().should('be.checked').and('have.value','unlimited')
    //Click on Save button
    cy.xpath('//span[contains(text(),"Save")]').click()
    //add another ticket
    cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    //TICKET NAME
    cy.get('#ticket-name').should('be.visible').should('be.enabled').type(ticketName2)
    //TICKET PRICE
    cy.get('#input-with-icon-textfield').should('be.visible').should('be.enabled').type(ticketPrice)
    //TICKET AVAILABILITY
    cy.get('input[value="unlimited"]').check().should('be.checked').and('have.value','unlimited')
    //Click on Save button
    cy.xpath('//span[contains(text(),"Save")]').click()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step3_Paid_Multiple_Event_limited', (ticketName1,ticketName2,ticketPrice,no_of_tickets) => {
    cy.get('#demo-simple-select-outlined').click()
    cy.get('div > ul > li').contains('Paid (Multiple Ticket Type Event)').click()
    //TICKET NAME
    cy.get('#ticket-name').should('be.visible').should('be.enabled').type(ticketName1)
    //TICKET PRICE
    cy.get('#input-with-icon-textfield').should('be.visible').should('be.enabled').type(ticketPrice)
    //TICKET AVAILABILITY
    cy.get('input[value="limited"]').check().should('be.checked').and('have.value','limited')
    //NUMBER OF TICKETS
    cy.get('input[id="outlined-basic"]').should('be.visible').should('be.enabled').type(no_of_tickets)
    //Click on Save button
    cy.xpath('//span[contains(text(),"Save")]').click()
    //add another ticket
    cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    //TICKET NAME
    cy.get('#ticket-name').should('be.visible').should('be.enabled').type(ticketName2)
    //TICKET PRICE
    cy.get('#input-with-icon-textfield').should('be.visible').should('be.enabled').type(ticketPrice)
    //TICKET AVAILABILITY
    cy.get('input[value="limited"]').check().should('be.checked').and('have.value','limited')
    //NUMBER OF TICKETS
    cy.get('input[id="outlined-basic"]').should('be.visible').should('be.enabled').type(no_of_tickets)
    //Click on Save button
    cy.xpath('//span[contains(text(),"Save")]').click()
    //Click NEXT button
    cy.Next()
})

Cypress.Commands.add('Step4', (description) => {
    cy.get(".public-DraftStyleDefault-block").type(description)
    cy.get('input[class="jss35"]').check().should('be.checked')
    cy.Next()
})