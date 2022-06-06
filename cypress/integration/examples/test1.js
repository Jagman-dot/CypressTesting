/// <reference types="Cypress" />


describe('My First Test Suite', ()=>{


    it('My FirstTest case', () => { 

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       
        
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        NOTE: 
        //add description of 

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(2).contains('ADD').click()

        //getting all of the products

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

         const text = $e1.find('h4.product-name').text();

         if(text.includes('Cashews')){
           cy.wrap($e1.find('button')).click()
         }

        })


        //* assert to check if the text of the logo is green kart
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.brand').then(function(logo){
          console.log(logo.text())  
          cy.log(logo.text());

        })

        
        cy.get('.cart').find('.cart-icon').click()
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
        //cy.get(':nth-child(14)').click

        cy.contains('Place Order').click()
        



        


    })


})