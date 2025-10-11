describe('Login no site Practice Expand Testing', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://practice.expandtesting.com/login');

   
    cy.get('[name="username"]').click().type('practice');
    cy.get('[name="password"]').click().type('SuperSecretPassword!');

    cy.get('#login button.d-block').click();

    cy.get('#flash b').should('have.text', 'You logged into a secure area!');
  });
});


  