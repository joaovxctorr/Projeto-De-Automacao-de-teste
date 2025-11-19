describe('Login no site Practice Expand Testing', () => {
  it('Deve exibir erro ao logar com um usuario que não atende aos requisitos', () => {
    cy.visit('https://practice.expandtesting.com/login');

    cy.get('[name="username"]').click().type('practic3');
    cy.get('[name="password"]').click().type('SuperSecretPassword!');

    cy.get('#login button.d-block').click();

    cy.get('#flash b').should('have.text', 'Your username is invalid!');
  });
});


  