class HomePage {
	getName() {
		return cy.get("div[class='form-group'] input[name='name']");
	}
	getGender() {
		return cy.get("select");
	}
	getEntripreneaur() {
		return cy.get("#inlineRadio3");
	}
	getShopTab() {
		return cy.get("a").contains("Shop");
	}
}

export default HomePage;
// export keyword, js makesure this class is avaiable in other files
