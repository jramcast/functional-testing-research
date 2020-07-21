describe("When the user visits the home page", () => {

    beforeEach(() => cy.visit("localhost:3000"));

    it("the user sees the greeting message", () => {
        cy.get(".App")
            .should("contain", "Learn React");
    });

});

