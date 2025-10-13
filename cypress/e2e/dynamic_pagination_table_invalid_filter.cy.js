describe('Tabela Paginada Dinâmica - Filtro sem resultados', () => {
  it('Deve exibir mensagem de "No matching records found" ao pesquisar por "Ballet"', function() {
   
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');
    
    cy.get('#example_filter input.form-control').click();
    cy.get('#example_filter input.form-control').type('Ballet');
    
    cy.get('#demo td.dataTables_empty').click();
    
    cy.get('#demo td.dataTables_empty').should('have.text', 'No matching records found');
  });
});
