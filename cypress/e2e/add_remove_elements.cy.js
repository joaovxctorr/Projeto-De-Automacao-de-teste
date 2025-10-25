describe('Página Add/Remove Elements para prática de automação de testes', () => {
  it('Deve adicionar e remover elementos com sucesso', () => {
    cy.visit('https://practice.expandtesting.com/add-remove-elements');
    
    cy.get('#core button.btn').click();
    cy.get('#core button.btn-primary').click();
    cy.get('#core button.btn-primary').click();

    cy.get('#elements button:nth-child(3)').click();
    cy.get('#elements button:nth-child(2)').click();
    cy.get('#elements button.added-manually').click();
  });
});
