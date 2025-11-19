describe('Tabela Paginada Dinâmica - Navegação de páginas', () => {

  it('Deve navegar para a página 3 e exibir corretamente o número de entradas', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');

    cy.get('#example_paginate a[data-dt-idx="3"]').click();

    cy.get('#core div.col-12').click();

    cy.get('#example_info').should('have.text', 'Showing 10 to 10 of 10 entries');
  });
});
