/// <reference types="cypress"/>

//plugin for iframe -> npm install -D cypress-iframe
// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/#bonus-cypress-iframe-plugin
import 'cypress-iframe'

describe("Smoke Test Set", () => {
    
    beforeEach( () => {
        //open the landing page
        cy.visit('http://localhost:4200/webpack-dev-server/')
        cy.frameLoaded('#iframe')
    })

    it("Landing page", () => {

        //check if the notification post has the correct title
        cy.iframe().find('[data-cy="titleNotification"]')
        .should('contain', 'Nio Inc was removed from you portfolio. Das Unternehmen entspricht nicht mehr den Yova Kriterien und ist nicht mehr langer im Yova-Universum verfubar')

        //click on the "Mehr" button
        cy.iframe().find('[data-cy="buttonMehr"]').should('contain', 'Mehr').click()
        cy.go('back')

        //Test the Close button
        cy.iframe().find('[data-cy="closeButtonLandingPage"]').click().should('not.be.visible')
        cy.reload()
        cy.iframe().find('[data-cy="closeButtonLandingPage"]').should('be.visible')

    })

    it("Notification center page -> First Notification -> Active Circle on/off", () => {

        // // PROBLEM: can't read the object from the previous page (maybe).     Grab the notification text, click on the "Mehr" button and compare title of the first notification to the grabbed text
        // cy.iframe().find('[data-cy="titleNotification"]').invoke('text').then( text => {
        //     cy.iframe().find('[data-cy="buttonMehr"]').click()
        //     expect(text).to.contain(title)
        //     //cy.iframe().find('[data-cy="title"]').should('contain', text)
        //     //cy.iframe().wrap(text).should('contain', title)
        // })
            
        cy.iframe().find('[data-cy="buttonMehr"]').click()
        cy.frameLoaded('#iframe')
        cy.iframe().find('[data-cy="notificationPost"]').first()
            .find('[data-cy="activeCircle"]')
            .should('be.visible')
            .parent().click()
            .find('[data-cy="activeCircle"]')
            .should('not.exist')

    })

    it("Notification center page -> First Notification - Expand/Close, Delete", () => {

        cy.iframe().find('[data-cy="buttonMehr"]').click()
        cy.frameLoaded('#iframe')

        cy.iframe().find('[data-cy="notificationPost"]')
            .first()
            .find('.mat-expansion-panel-content ng-trigger ng-trigger-bodyExpansion')
            .should('not.exist')
        cy.iframe().find('[data-cy="notificationPost"]')
            .first().click()
        cy.iframe().find('[data-cy="description"]')
            .should('be.visible')
        cy.iframe().find('[data-cy="deleteBtn"]')
            .first()
            .should('be.visible')
        cy.iframe().find('[data-cy="notificationPost"]')
            .first().click()
        cy.iframe().find('[data-cy="description"]')
            .should('not.be.visible')
        cy.iframe().find('[data-cy="notificationPost"]')
            .first().click()

        // NEED TO FIND A WAY TO COLLECT THE TEXT OF THE NODE, DELETE THE NODE AND CHECK BY COLLECTED TEXT IF IT IS NOT.EXISTING
        // cy.iframe().find('[data-cy="title"]').first().invoke('text').then( text => {
        //     const 
        //     expect(text).to.equal
        //     //cy.iframe().find('[data-cy="deleteBtn"]')

        // })
        cy.iframe().find('[data-cy="deleteBtn"]')
            .first()
            .click()
        
            //.get('[data-cy="notificationPost"]').first()

        
    })

})
