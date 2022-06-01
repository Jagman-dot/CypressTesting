/// <reference types="Cypress" />

describe('My Second test case',()=>{


it('Test 2',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

    //^ static dropdowns
    cy.get('#dropdown-class-example').select('option1')

    //^ dynamic dropdown
    cy.get('#autocomplete').type('india')
    cy.get('.ui-menu-item').each(($e1, index, $list)=>{
        
        if($e1.text()==='India'){
            cy.wrap($e1).click()
        }
        
    }) 

    //^ working with hidden elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')

    //^ pop-up
    cy.get('#name').type('Jagman')
    cy.get("[value ='Alert']").click()
    cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello Jagman, share this practice page and share your knowledge')
    })


    //^ removing target attribute so new tab doesn't open
    cy.get('#opentab').invoke('removeAttr','target').click()




})

    


})