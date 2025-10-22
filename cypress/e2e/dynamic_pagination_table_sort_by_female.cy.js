describe('Tabela dinâmica - ordenação por gênero feminino', () => {
  it('Deve ordenar a tabela exibindo primeiro as entradas do gênero Feminino', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');

    // Clica no cabeçalho da coluna "Gender" para ativar a ordenação
    cy.get('#example th[aria-label="Gender: activate to sort column ascending"]').click();

    // Realiza múltiplos cliques para garantir atualização da ordenação
    cy.get('#demo tr:nth-child(1) td.sorting_1').click()
    cy.get('#demo tr:nth-child(1) td.sorting_1').should('have.text', 'Female');

    // Valida que a segunda linha também é "Female"
    cy.get('#demo tr.even td.sorting_1').click()
    cy.get('#demo tr.even td.sorting_1').should('have.text', 'Female');

    // Valida que a terceira linha também é "Female"
    cy.get('#demo tr:nth-child(3) td.sorting_1').click()
    cy.get('#demo tr:nth-child(3) td.sorting_1').should('have.text', 'Female');
  });
});
