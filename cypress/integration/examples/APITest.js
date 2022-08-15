/// <reference types="Cypress" />

describe('API Test 1', () => {

    it('Test for request', () => {

        // cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', 
        {
            "name":"Learn about life 3",
            "isbn":"279jglal",
            "aisle":"279",
            "author":"John gomz"
        }).then((response) => {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })

    })
})