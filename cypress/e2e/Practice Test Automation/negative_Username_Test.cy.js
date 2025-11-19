describe('Login Invalido - Usuario Incorreto', () => {

  it('Deve exibir mensagem de erro ao inserir usuario errado', () => {

    cy.visit('https://practicetestautomation.com/practice-test-login')
    cy.get('[name="username"]').click().type('studemt'); 
    cy.get('[name="password"]').click().type('Password123');
    cy.get('#submit').click();
    cy.get('#error').should('have.text', 'Your password is invalid!');
  });

});
