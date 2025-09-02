describe(
  "Login in desktop mode",
  {
    viewportHeight: 768,
    viewportWidth: 1360,
  },
  () => {
    it("should visit page and login with alec credentials", () => {
      cy.login("alec.silva@meucurso.com.br", "123");
    });
  }
);
