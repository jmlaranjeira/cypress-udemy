/// <reference types="Cypress" />
import HomePage from '../../support/pages/HomePage'
import ProductPage from '../../support/pages/ProductPage'

describe('Framework Test 8', () => {

    Cypress.config('defaultCommandTimeout', 8000)

    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data
        })
    })

    it('Demo example', () => {

        

        const homePage = new HomePage()
        const productPage = new ProductPage()
      
        cy.visit(Cypress.env('url') + '/angularpractice');

        homePage.getEditBox().type(globalThis.data.name)
        homePage.getGender().select(globalThis.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepeneaur().should('be.disabled')
        homePage.getShopTab().click()

        // without class:
        // cy.get('form input.form-control[name="name"]').type(globalThis.data.name)
        // cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)
        // cy.get(':nth-child(4) > .ng-untouched').should('have.value', globalThis.data.name)
        // cy.get('form input.form-control[name="name"]').should('have.attr', 'minlength', '2')
        // cy.get('#inlineRadio3').should('be.disabled')
        // cy.get(':nth-child(2) > .nav-link').click()

        globalThis.data.productName.forEach((value) => {
            cy.selectProduct(value)
        })

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

        productPage.checkoutButton().click()

        cy.selectCountry(globalThis.data.country)

        productPage.checkboxTerms().click()

        productPage.purchaseButton().click()

        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        // cy.get('.alert').then((element)=> {
        //     expect(element.text().includes('Success')).to.be.true
        // })
        cy.get('.alert').should('contain.text', 'Success') // the best option
        


        // productPage.getCountry().type(globalThis.data.country)

        // cy.get(':nth-child(4) > :nth-child(5) > .btn')

        
        


    })
  })