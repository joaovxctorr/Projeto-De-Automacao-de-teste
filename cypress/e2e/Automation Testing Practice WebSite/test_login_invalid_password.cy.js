describe('Login no site Practice Expand Testing', () => {
  it('Deve exibir erro ao logar com uma senha que não atende aos requisitos', () => {
    cy.visit('https://practice.expandtesting.com/login');

    cy.get('[name="username"]').click().type('practice');
    cy.get('[name="password"]').click().type('SuperSecretPassword');

    cy.get('#login button.d-block').click();

    cy.get('#flash b').should('have.text', 'Your password is invalid!');
  });
});


  