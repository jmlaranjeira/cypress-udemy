/// <reference types="Cypress" />

describe('My Seven Test', () => {
    it('Does not do much!', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // 
        cy.get('#opentab').then((el) => {
            const url = el.prop('href')
            cy.visit(url)
        })
        
        


    })
  })