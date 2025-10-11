describe('Registro de usuário - Validação de usuario', () => {

  it('Deve exibir erro ao registrar com o usuario que não atende aos requisitos', () => {
    cy.visit('https://practice.expandtesting.com/register');

    cy.get('[name="username"]').click().type('john jackson'); 
    cy.get('[name="password"]').click().type('SuperPassword!'); 
    cy.get('[name="confirmPassword"]').click().type('SuperPassword!');

    cy.get('[data-testid="register"] button.d-block').click();

    cy.get('#flash b')
      .should('have.text', 'Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen.');
  });

});
