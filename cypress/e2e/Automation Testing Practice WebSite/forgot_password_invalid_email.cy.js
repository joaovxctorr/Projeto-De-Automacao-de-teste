describe('Recuperação de Senha', () => {
  it('Deve exibir mensagem de erro ao tentar enviar sem um e-mail válido', () => {
    cy.visit('https://practice.expandtesting.com/forgot-password');
    
    cy.get('[name="email"]').click();
    cy.get('#forgot_password button.d-block').click();
    cy.get('#forgot_password div.mb-3').click();
    
    cy.get('#forgot_password div.invalid-feedback')
      .should('contain.text', 'Please enter a valid email address');
  });
});
