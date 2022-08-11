/// <reference types="Cypress" />

describe('Framework Test 9', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data
        })
    })

    it('Demo example', () => {
      
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        // 
        

        // input[name='name']:nth-child(1)

        
        


    })
  })