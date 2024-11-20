/// <reference types="cypress" />

describe('First Test', () => {
    //beforeEach(() => {
      // Visit the page with a simple input field for "Hello World" test
    //  cy.visit('https://example.cypress.io/todo') // Or replace with your actual URL for the test
    //})
  
    it('should find components .', () => {

        cy.visit("http://localhost:3000/");

        //cy.get("input");

        //cy.get("input").type("hello world");

        cy.get("input").should("have.value", "Hello World");


    })
  
  
  })
  