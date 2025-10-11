describe('Registro de usuário - Senha válida', () => {

  it('Deve registrar com sucesso com senha válida', () => {
    cy.visit('https://practice.expandtesting.com/register');

    cy.get('[name="username"]').click().type('susansmith');
    cy.get('[name="password"]').click().type('SuperPassword123!');
    cy.get('[name="confirmPassword"]').click().type('SuperPassword123!');

    cy.get('[data-testid="register"] button.d-block').click();

    cy.get('#flash b')
      .should('have.text', 'Successfully registered, you can log in now.');
  });

});
