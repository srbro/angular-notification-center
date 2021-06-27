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

    it("Landing page - Mehr button, Correct title and Close button", () => {

        //Test "Mehr" button and check if the notification post has the correct title
        cy.iframe().find('.infobox').then( infobox => {

            //Save the infobox text into var text
            const text = infobox.text()

            //Mehr button - check the text and click on it
            cy.iframe().find('[data-cy="buttonMehr"]').should('contain', 'Mehr').click()
            cy.frameLoaded('#iframe')
            cy.iframe().find('.notifications').should('be.visible')
            
            //Find the first notification element
            cy.iframe().find('[data-cy="title"]').first().then ( title =>{

                //After entering the Notification center and finding the first notification, save it's title text into the var text2
                const text2 = title.text()
                cy.log('text 2 = ' + text2)
                cy.log('text = ' + text)

                //Check if Infobox text, from the landing page, contains the title text of the first notification in the Notification center page
                cy.wrap(text).should('contain', text2)
            })

        })

        //Return to the landing page
        cy.go('back')

        //Test the Close button
        cy.iframe().find('[data-cy="closeButtonLandingPage"]').click().should('not.be.visible')
        cy.reload()
        cy.iframe().find('[data-cy="closeButtonLandingPage"]').should('be.visible')

    })

    it("Notification center page -> First Notification -> Active Circle on/off", () => {
        
        cy.iframe().find('[data-cy="buttonMehr"]').click()
        cy.frameLoaded('#iframe')

        //Check if Active Circle is visible in the first notification and if it dissapears after the click on the notification
        cy.iframe().find('#mat-expansion-panel-header-0').first()
            .find('[data-cy="activeCircle"]')
            .should('be.visible')
            .parent().click()
            .find('[data-cy="activeCircle"]')
            .should('not.exist')

    })

    it.only("Notification center page -> First Notification - Expand/Close, Delete", () => {

        cy.iframe().find('[data-cy="buttonMehr"]').click()
        cy.frameLoaded('#iframe')

        //Check if the expanded area of the first notification is visible and click on the first notification
        cy.iframe().find('#mat-expansion-panel-header-0')
            .find('#cdk-accordion-child-0')
            .should('not.exist')
        cy.iframe().find('#mat-expansion-panel-header-0')
            .click()

        //In the first notification expanded area check the existance of Delete button and if the description ccontains the text "removed"
        cy.iframe().find('#cdk-accordion-child-0')
            .should('be.visible')
            .find('[data-cy="deleteBtn"]')
            .should('be.visible')
            .parents('.accordion-content').click()
            .find('.description > p').first()
            .should('contain', 'removed')

        //Click again on the first notification title and check if the expandable area is collapsed 
        cy.iframe().find('#mat-expansion-panel-header-0')
            .click()
        cy.iframe().find('#cdk-accordion-child-0')
            .should('not.be.visible')

        //Test the function of deleting the first notification
        cy.iframe().find('#mat-expansion-panel-header-0')
            .click()
        cy.iframe().find('[data-cy="deleteBtn"]')
            .first()
            .click()
        cy.iframe().find('#notify-0').should('have.css', 'display').and('match', /none/)
        
    })

})
