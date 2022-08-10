/// <reference types="Cypress" />

describe('Framework Test', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data
        })
    })

    it('Demo example', () => {
      
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        // 
        cy.get('form input.form-control[name="name"]').type(globalThis.data.name)
        
        cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value', globalThis.data.name)

        cy.get('form input.form-control[name="name"]').should('have.attr', 'minlength', '2')

        cy.get('#inlineRadio3').should('be.disabled')

        // input[name='name']:nth-child(1)

        
        


    })
  })