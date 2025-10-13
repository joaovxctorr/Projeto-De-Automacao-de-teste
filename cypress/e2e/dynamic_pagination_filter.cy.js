describe('Tabela Paginada Dinâmica - Practice Expand Testing', () => {

  it('Deve filtrar a tabela corretamente ao pesquisar por "Swimming"', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');

    cy.get('#example_filter input.form-control').click().type('Swimming');

    cy.get('#demo td:nth-child(6)').should('have.text', 'Swimming');
  });
});

it('1', function() {
  cy.visit('https://practice.expandtesting.com/dynamic-pagination-table')
  
});

it('1', function() {
  cy.visit('https://practice.expandtesting.com/dynamic-pagination-table')
  
});
