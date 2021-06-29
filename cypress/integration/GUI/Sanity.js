/// <reference types="cypress"/>

//plugin for iframe -> npm install -D cypress-iframe
// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/#bonus-cypress-iframe-plugin
import 'cypress-iframe'

describe("Notification center page - Active Circle on/off, Expand/Collapse and Delete - EACH - IN PROGRESS", () => {

    beforeEach( () => {
        //open the landing page
        cy.visit('http://localhost:4200/webpack-dev-server/')
        cy.frameLoaded('#iframe')
        cy.iframe().find('[data-cy="buttonMehr"]').click()
        cy.frameLoaded('#iframe')
    })

    it("Active Circle on/off", () => {

        //Check each notification if it has Active Circle, visible and if it has, does it dissapear after the click on the notification
        cy.iframe().find('mat-expansion-panel-header').each( (expansionPanel, i) => {

            let num = i+1
            cy.log('NOTIFICATION No ' + num)

            if( expansionPanel.find('[data-cy="activeCircle"]').length > 0 ){
                cy.log('NOT READ')
                cy.wrap(expansionPanel)
                .find('[data-cy="activeCircle"]').should('be.visible')
                cy.wrap(expansionPanel).click()
                .find('[data-cy="activeCircle"]').should('not.exist')
                
            } else {
                cy.log('ALREADY READ')
                cy.wrap(expansionPanel)
                .find('[data-cy="activeCircle"]').should('not.exist')
            }

        })  

    })

})