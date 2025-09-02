describe(
  "Buy product in desktop mode",
  {
    viewportHeight: 768,
    viewportWidth: 1360,
  },
  () => {
    it("should be login and buy item", () => {
      cy.login("alec.silva@meucurso.com.br", "123");
      cy.contains("Pós-Graduação em Contratos - Teoria e Prática").click();
      cy.getByData("addCart-button").click();
      cy.get("#notistack-snackbar").contains(
        "Produto adicionado no carrinho!"
      );
      cy.getByData("cart-button").click();
      cy.getByData("cartPage-button").should("exist").click();
      cy.getByData("address-label").should("exist").click("top");
      cy.get("ul li:first").should("exist").click();
      cy.getByData("finishBuy-button").click();
      cy.get(
        ":nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input"
      ).click();
      cy.getByData("purchasepix-button").click();
      cy.getByData("payment-sucesss")
        .should("exist")
        .and("contain.text", "Compra Finalizada com Sucesso!");
    });
  }
);
