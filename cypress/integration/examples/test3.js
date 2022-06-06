/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe';


describe('My Second test case',()=>{


it('Static and Dynamic tests',()=>{

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

    //^ navigating back to the previous page
    cy.go('back');

    // ^ working with tables
    cy.get('#product:nth-child(2) tr td:nth-child(2)').each(($e1,index, $list)=>{
        const text = $e1.text();

        if(text.includes('Python')){
              const price = $e1.next().text()
              expect(price).to.equal('25')
        }
    })

    // ^ mouse hovering - need to use Jquery show method
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', 'top')

    // ^ handling child windows cypress dosn't support child windows without deleting target

    cy.get('#opentab').then(($e1)=>{
        const url = $e1.prop('href')
        cy.visit(url)
    })
})

    
it('iframe-testing', ()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')

})

})