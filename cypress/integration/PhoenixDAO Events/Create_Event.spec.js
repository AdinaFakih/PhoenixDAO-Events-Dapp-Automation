

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
        //cy.log(this.data.Step1.length)
        cy.visit_Create_Events()
        //for (let i = 0; i < this.data.Step1.length; i++){

        this.data.Step1.forEach(elements => {
            cy.Step1_One_day_Event(elements.event_name, elements.event_organizer)
            cy.wait(6000)
            cy.Step1_More_than_a_day(elements.event_name, elements.event_organizer)
        })
    
    })
})