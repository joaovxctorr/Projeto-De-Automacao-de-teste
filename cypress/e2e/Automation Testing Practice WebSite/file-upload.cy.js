import 'cypress-file-upload';

describe('Página de Upload de Arquivo', () => {
  it('Deve fazer upload de um arquivo com sucesso mesmo com erros da aplicação', () => {
    // Ignora erros da aplicação, como "Assignment to constant variable",
    // permitindo que o teste continue normalmente.
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('https://practice.expandtesting.com/upload');

    cy.get('[data-testid="file-input"]').attachFile('arquivo_para_upload.txt');
    cy.get('[data-testid="file-submit"]').click();

    cy.get('#uploaded-files p').should('contain.text', 'arquivo_para_upload.txt');
    cy.get('#core h1').should('have.text', 'File Uploaded!');
  });
});
