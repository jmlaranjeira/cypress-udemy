/// <reference types="Cypress" />

describe('My five Test', () => {
    it('Does not do much!', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        // 
        cy.get('tr td:nth-child(2)').each( ($el, index, $list) => {

            const text = $el.text()

            if( text.includes('Python') ) {
                
                // cy.log(cy.wrap($el).next());

                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })

            }
        })

        


    })
  })