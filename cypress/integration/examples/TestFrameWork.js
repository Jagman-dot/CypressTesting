/// <reference types="Cypress" />

describe("My First Test Suite", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get("div[class='form-group'] input[name='name']").type(this.data.name);
    cy.get("div[class='form-group'] input[name='name']").should(
      "have.attr",
      "minlength",
      "2"
    );

    cy.get("select").select(this.data.gender);
    cy.get("#inlineRadio3").should("be.disabled");
    cy.get("a").contains("Shop").click();

    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
  });
});
