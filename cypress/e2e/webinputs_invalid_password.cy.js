describe('Registro de usuário - Validação de senha', () => {

  it('Deve exibir erro ao registrar com uma senha que não atende aos requisitos', () => {
    cy.visit('https://practice.expandtesting.com/register');

    cy.get('[name="username"]').click().type('MatthewStone'); 
    cy.get('[name="password"]').click().type('123'); 
    cy.get('[name="confirmPassword"]').click().type('123');

    cy.get('[data-testid="register"] button.d-block').click();

    cy.get('#flash b')
      .should('have.text', 'Password must be at least 4 characters long.');
  });

});
