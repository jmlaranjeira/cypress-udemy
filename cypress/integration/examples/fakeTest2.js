/// <reference types="Cypress" />

describe('Fake test 2', () => {

    it('Test for intercept', () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
        (req) => {
            
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=mal"
            req.continue((res) => {
                // expect(res.statusCode).to.equal(403)
            })

        }).as('dummyUrl')

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')

    })
})