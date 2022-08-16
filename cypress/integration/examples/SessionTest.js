/// <reference types="Cypress" />

import neatCSV from 'neat-csv'

let productName

describe('Session Test', () => {

    Cypress.config('viewportWidth', 1250)
    Cypress.config('viewportHeight', 700)

    it('Is logged in through local storage', async() => {

        cy.LoginAPI().then(() => {
            cy.visit('https://rahulshettyacademy.com/client', {

                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        cy.get('.card-body b').eq(1).then((el) => {
            productName = el.text()
        })

        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.wait(2000)

        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()

        cy.get('[placeholder*="Select Country"]').type("ind")

        cy.get('.ta-results .ta-item').each(($el, index, $list) => {

            if($el.text().trim() === 'India') {
                cy.log('Entra')
                cy.wrap($el).click()
            }
        })

        cy.get('.action__submit').click()
        
        cy.wait(2000)
        cy.get('.order-summary button').click()

        const fileServerFolder = Cypress.config('fileServerFolder')

        cy.readFile( fileServerFolder + '/cypress/downloads/order-invoice_juanma_lgm.csv' ).then( async(text) => {
            const csv = await neatCSV(text);
            
            const currentProduct = csv[0]['Product Name'];

            expect(productName).to.equal(currentProduct)
            
            // csv[0]['Address'] = 
            // csv[0]['Invoice Number'] =             
            // csv[0]['Ordered By'] =  
            // csv[0]['Product Description'] =  
            // csv[0]['Product Price'] =  
        })

        


    })
})