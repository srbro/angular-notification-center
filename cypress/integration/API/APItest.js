/// <reference types="cypress"/>

describe("GET and POST req - assert requests body", () => {

    it(" GET ", () => {

        cy.request({
            url: 'http://019ee.mocklab.io/customers',
            headers: {
                'Authorization': 'eW92YV90ZXN0OnlvdmFfcGFhc3N3b3JkCg=='
            }
        }).then( resp => {
                expect(resp.status).to.be.equal(200)
                console.log(resp.body)

                const firstNode = resp.body[0]
                const secondNode = resp.body[1]

                expect(firstNode.id).to.equal(1)
                expect(firstNode.first_name).to.equal('Inyova')
                expect(firstNode.last_name).to.equal('Inyova')
                expect(firstNode.age).to.equal(18)
                expect(firstNode.created_at).to.equal("2019-03-19")

                expect(secondNode.id).to.equal(2)
                expect(secondNode.first_name).to.equal('Foo')
                expect(secondNode.last_name).to.equal('Bar')
                expect(secondNode.age).to.equal(40)
                expect(secondNode.created_at).to.equal("2019-03-19")

            })
 
    })

    it(" POST ", () => {

        cy.request({
            method: 'POST',
            url: 'http://019ee.mocklab.io/customers',
            headers: {
                'Authorization': 'eW92YV90ZXN0OnlvdmFfcGFhc3N3b3JkCg=='
            }
        }).then( resp => {
                expect(resp.status).to.be.equal(201)
                console.log(resp.body)

                expect(resp.body.id).to.equal(3)
                expect(resp.body.first_name).to.equal('Inyova')
                expect(resp.body.last_name).to.equal('Inyova')
                expect(resp.body.age).to.equal(18)
                expect(resp.body.created_at).to.equal("2019-03-19")

            })
 
    })

})
