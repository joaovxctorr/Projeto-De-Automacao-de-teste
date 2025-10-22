describe('Tabela dinâmica - ordenação por gênero masculino', () => {
  it('Deve ordenar a tabela exibindo primeiro as entradas do gênero Masculino', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table');

    // Clica no cabeçalho "Gender" para ordenar a tabela por gênero
    cy.get('#example th[aria-label="Gender: activate to sort column ascending"]').click();
    // Clica novamente no cabeçalho para inverter a ordem (agora deve mostrar "Male" primeiro)
    cy.get('#example th.sorting_asc').click();

    cy.get('#demo tr:nth-child(1) td.sorting_1').click();
    cy.get('#demo tr:nth-child(1) td.sorting_1').should('have.text', 'Male');

    cy.get('#demo tr.even td.sorting_1').click();
    cy.get('#demo tr.even td.sorting_1').should('have.text', 'Male');

    cy.get('#demo tr:nth-child(3) td.sorting_1').click();
    cy.get('#demo tr:nth-child(3) td.sorting_1').should('have.text', 'Male');
  });
});
