

describe('My First Test', () => {
    it('Does not do much!', () => {
      
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocation')

        cy.get('@productLocation').find('.product').should('have.length', 4)

        cy.get(':nth-child(3) > .product-action > button').click()

        cy.get('@productLocation').find('.product').eq(1).contains('ADD TO CART').click().then(() => {
            console.log('sf')
        })

        cy.get('@productLocation').find('.product').each( ($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if( textVeg.includes('Cashews') ) {

                cy.wrap($el).find('button').click()

            }
        })

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        cy.get('.brand').then( ( logoElement ) => {

            cy.log(logoElement.text())

        })


        // cy.log(cy.get('.brand').text())




    })
  })