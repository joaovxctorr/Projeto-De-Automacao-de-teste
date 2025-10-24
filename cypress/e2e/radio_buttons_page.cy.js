describe('Radio Buttons', () => {
  it('deve permitir selecionar diferentes opções de cores e esportes', () => {

    cy.visit('https://practice.expandtesting.com/radio-buttons');

    cy.get('#red').check();
    cy.get('#yellow').check();
    cy.get('#black').check();
    cy.get('#blue').check();

    cy.get('#basketball').check();
    cy.get('#football').check();
    cy.get('#tennis').check();
  });
});
