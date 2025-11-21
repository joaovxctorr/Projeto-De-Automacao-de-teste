describe('My Browser Information page for Automation Testing Practice', () => {
  it('deve exibir corretamente o nome e o user agent do navegador', () => {

    cy.visit('https://practice.expandtesting.com/my-browser');

    cy.get('#browser-toggle').click();

    cy.get('#browser-name').should('have.id', 'browser-name');

    cy.get('#browser-user-agent').should('have.id', 'browser-user-agent');
  });
});
