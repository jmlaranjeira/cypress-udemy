/// <reference types="Cypress" />
import HomePage from '../../../../support/pages/HomePage'
import ProductPage from '../../../../support/pages/ProductPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const productPage = new ProductPage()
const homePage = new HomePage()

Given('I open ECommerce Page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice');
})

When('I add items to Cart', () => {
    homePage.getShopTab().click()

    globalThis.data.productName.forEach((value) => {
        cy.selectProduct(value)
    })
})

And('Validate the total prices', () => {
    productPage.checkoutButton().click()

    // Products validations
    let total = 0;
    cy.get('tr td:nth-child(4) strong').each( ($el, index, $list) => {
        // ₹. 
        const text = $el.text().split(' ')[1].trim()

        total += Number(text)
        
    }).then(() => {
        cy.log('total', total)
    })

    cy.get('tr td:nth-child(5) strong').then((element) => {
        const result = element.text().split(' ')[1].trim()
        expect(Number(result)).to.equal(total)
    })
})

Then('select the country submit and verify Thankyou', () => {
    productPage.checkoutButton().click()

    cy.selectCountry(globalThis.data.country)

    productPage.checkboxTerms().click()

    productPage.purchaseButton().click()

    cy.get('.alert').should('contain.text', 'Success')
})

When('I fill the form details', (dataTable) => {
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behavior', () => {
    homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepeneaur().should('be.disabled')
})

And('Select the Shop Page', () => {
    homePage.getShopTab().click()
})
