
describe('Test Create Event', () =>
{
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Create Event',function(){
        cy.visit_Events_Dapps()
        cy.visit_Create_Events()
        for (let i = 0; i < 1; i++){
            cy.Step1_One_day_Event(this.data.info[i].event_name, this.data.info[i].event_organizer, this.data.info[i].date)
            //cy.Step1_More_than_a_day(this.data.info[i].event_name,this.data.info[i].event_organizer)
            cy.Step2_Physical_Event(this.data.info[i].event_location,this.data.info[i].topic,this.data.info[i].filepath)
            //cy.Step2_Online_Event(this.data.info[i].event_link)
            //cy.Step3_Free_Event_unlimited()
            //cy.Step3_Paid_Single_Event_unlimited(this.data.info[i].ticketPrice)
            //cy.Step3_Paid_Multiple_Event_unlimited(this.data.info[i].ticketName1,this.data.info[i].ticketName2,this.data.info[i].ticketPrice)
            //cy.Step3_Free_Event_limited(this.data.info[i].no_of_tickets)
            //cy.Step3_Paid_Single_Event_limited(this.data.info[i].ticketPrice,this.data.info[i].no_of_tickets)
            cy.Step3_Paid_Multiple_Event_limited(this.data.info[i].ticketName1,this.data.info[i].ticketName2,this.data.info[i].ticketPrice,this.data.info[i].no_of_tickets)
            cy.Step4(this.data.info[i].description)
            cy.wait(2000)
        }
    })
})