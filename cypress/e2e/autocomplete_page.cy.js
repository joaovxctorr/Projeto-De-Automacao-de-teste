describe('Página Autocomplete para prática de automação de testes', () => {
  it('Deve permitir que o usuário digite e selecione um país na lista de sugestões', () => {
    cy.visit('https://practice.expandtesting.com/autocomplete');
    cy.get('#country').click();
    cy.get('#country').type('br{enter}');
    cy.get('#countryautocomplete-list div:nth-child(1)').click();
  });
});
