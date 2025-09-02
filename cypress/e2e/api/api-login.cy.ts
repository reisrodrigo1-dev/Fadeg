describe("Login test in API", () => {
  it("should be to allow login in API", () => {
    cy.request({
      method: "POST",
      url: "https://apiecommerce.meucurso.com.br/api/studentlogin",
      body: {
        Email: "alec.silva@meucurso.com.br",
        password: "123",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("Token");
      expect(response.body).to.have.property("Name");
      expect(response.body).to.have.property("CustomerId");
      expect(response.body).to.have.property("StudentAddress");
    });
  });
});
