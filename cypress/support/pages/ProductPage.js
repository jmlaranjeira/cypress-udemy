
class ProductPage {

    checkoutButton() {
        // return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
        return cy.contains('Checkout')
    }

    getCountry() {
        return cy.get('#country')
    }

    checkboxTerms() {
        return cy.get('.checkbox')
    }

    purchaseButton() {
        return cy.contains('Purchase')
    }

}

export default ProductPage;