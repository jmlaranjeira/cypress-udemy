/// <reference types="Cypress" />

describe('My four Test', () => {
    it('Does not do much!', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // Pop Up - alerts
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Windows
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'rahulshettyacademy')

        cy.go('back')
        // cy.get('#openwindow')



        

        


    })
  })