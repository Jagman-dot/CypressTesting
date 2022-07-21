/// <reference types="Cypress" />
import HomePage from "../pageObjects/Homepage";

describe("My First Test Suite", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    const homepage = new HomePage();

    homepage.getName().type(this.data.name);
    homepage.getName().should("have.attr", "minlength", "2");

    homepage.getGender().select(this.data.gender);
    homepage.getEntripreneaur().should("be.disabled");
    homepage.getShopTab().click();

    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    cy.contains("Checkout").click();

    cy.get(".btn.btn-success").click();

    cy.get("#country").type("India");

    cy.get(".suggestions > ul > li > a").click();

    cy.get("#checkbox2").click({ force: true });

    cy.get(".ng-untouched > .btn").click();

    cy.get(".alert").then((text) => {
      const actualText = text.text();
      expect(actualText).to.include(
        "Success! Thank you! Your order will be delivered in next few weeks :-)."
      );
    });

    //run time :24
  });
});
