describe('Tabela dinâmica - validação do tamanho total da tabela', () => {
  it('Deve exibir todas as entradas corretamente na tabela', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');

    cy.get('#example_length [name="example_length"]').select('10');

    cy.get('#example_info').should('have.text', 'Showing 1 to 10 of 10 entries');

    cy.get('#example tbody tr').should('have.length', 10);
  });
});
