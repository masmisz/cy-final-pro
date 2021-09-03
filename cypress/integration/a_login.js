describe("login", function () {
    it("login", function () {
        cy.visit("https://admin.pkh.dojobox.id/");
        cy.get("#input-email")
            .type("e@dojobox.id")
            .should("have.value", "e@dojobox.id");
        cy.get("#input-password").type("admin").should("have.value", "admin");
        cy.get("#btn-login").click();
        cy.wait(3000);
    });

    it("logout", function () {
        cy.contains("Super Admin").click();
        cy.get("#userDropdown").click({force: true,});
        cy.get('.dropdown-menu > [href="#"]').click({force: true,})
        cy.get("#exampleModalLabel").should("have.text", "Ready to Leave?");
        cy.get(".modal-footer > .btn-primary").click();
    });
});
