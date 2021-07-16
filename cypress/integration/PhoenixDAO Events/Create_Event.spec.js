
describe('Test Create Event', () =>
{
    // before(() => {
    //     // runs once before all tests in the block
    //     cy.fixture('example').then(function({Step1.event_name}){
    //     })
    // })

    it('Create Event',function(){
        cy.visit_Events_Dapps()
        cy.visit_Create_Events()
        cy.Step1_One_day_Event("Pakistan Tour","Adina Fakih")
        //cy.Step1_More_than_a_day("Pakistan Tour","Adina Fakih")
    
    })
})