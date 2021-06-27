/// <reference types="cypress"/>

describe("API Tests", () => {

    // beforeEach( () => {
    //     //open the landing page
    //     cy.visit('http://localhost:4200/webpack-dev-server/')
    // })

    it(" GET ", () => {

        cy.request({
            url: 'http://localhost:4200/webpack-dev-server/customers',
            headers: {
                'Authorization': 'eW92YV90ZXN0OnlvdmFfcGFhc3N3b3JkCg=='
            }
        }).then( resp => {
                expect(resp.status).to.be.equal(200)
                //expect(resp.body).to.have.property('first_name')
            })


        // cy.request({
        //     url: 'http://localhost:4200/webpack-dev-server/customers',
        //     headers: {
        //         'Authorization': 'eW92YV90ZXN0OnlvdmFfcGFhc3N3b3JkCg=='
        //     }
        // }).its('body').should('include', 'id')
 
    })

})


// ..ran out of time :)   I worked on the GUI task first, but got carried away and left with a short period for API :(   need to investigate more