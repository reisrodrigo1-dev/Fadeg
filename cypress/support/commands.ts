/// <reference types="cypress" />
// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByData(seletor: string): Chainable<JQuery<HTMLElement>>;
    login(email: string, pwd: string): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.config("defaultCommandTimeout", 200000);

Cypress.Commands.add("getByData", (seletor) => {
  return cy.get(`[data-testid=${seletor}]`);
});
Cypress.Commands.add("login", (email, pwd) => {
  cy.visit("http://localhost:3000/");
  cy.getByData("login-button").click();
  cy.get("[name=email]").type(email);
  cy.get("[name=password]").type(pwd);
  cy.getByData("enter-button").click();
  cy.intercept("GET", "http://localhost:3000/api/auth/session").as(
    "userRequest"
  );
  cy.wait("@userRequest", { timeout: 50000 }).then((interception) => {
    interception.response.statusCode = 200;
  });
  cy.get("#notistack-snackbar")
    .should("exist")
    .contains("Login realizado com sucesso!");
});
