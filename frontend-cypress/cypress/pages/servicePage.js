/// <reference types="cypress" />


//elements
const titleOfServicesPage = 'Acme Web Deisgn | Services'



//funnctions / actions
function checkTitleOfServicesPage(cy){
    cy.title().should('eq',titleOfServicesPage)
}


// exports
module.exports = {
    checkTitleOfServicesPage
}