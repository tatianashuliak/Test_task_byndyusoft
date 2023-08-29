/// <reference types="cypress" />

describe("checking contact info", () => {
    it("checks is email correct", () => {
    cy.visit("https://google.com");
    cy.get("[name='q']").type("Byndyusoft");
    cy.get('.FPdoLc > center > .gNO89b').click();
    cy.get('h3', {timeout: 10000}).first().click();
    cy.origin('https://byndyusoft.com', () => {
    cy.get('.btn--info', {timeout: 10000}).click();
    cy.contains("sales@byndyusoft.com").should("be.visible");
    });
    });
    it("checks is telegram link correct", () => {
        cy.visit("https://google.com");
        cy.get("[name='q']").type("Byndyusoft");
        cy.get('.FPdoLc > center > .gNO89b').click();
        cy.get('h3', {timeout: 10000}).first().click();
        cy.origin('https://byndyusoft.com', () => {
        cy.get('.btn--info', {timeout: 10000}).click();
        cy.get("a[href='http://t.me/alexanderbyndyu']").should("exist");
        });
        });
});