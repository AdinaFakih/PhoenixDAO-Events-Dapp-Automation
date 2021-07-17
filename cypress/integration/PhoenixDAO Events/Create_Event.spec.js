

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
        for (let i = 0; i < 1; i++){
        //this.data.Step1.forEach(elements => {this.data.Step1.length
            //cy.Step1_One_day_Event(this.data.Step1[i].event_name, this.data.Step1[i].event_organizer,this.data.Step1[i].date,this.data.Step1[i].start_time,this.data.Step1[i].end_time)
            cy.Step1_More_than_a_day(this.data.Step1[i].event_name,this.data.Step1[i].event_organizer,this.data.Step1[i].start_date,this.data.Step1[i].end_date,this.data.Step1[i].to,this.data.Step1[i].from)
        //})
        }
    })
})