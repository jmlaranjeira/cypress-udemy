
class HomePage {

    getEditBox() {
        return cy.get('form input.form-control[name="name"]')
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }
    
    getEntrepeneaur() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;