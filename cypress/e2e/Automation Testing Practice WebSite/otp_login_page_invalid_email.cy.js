describe('OTP Login Page', () => {
  it('deve exibir mensagem de erro ao inserir um e-mail inválido', () => {
    cy.visit('https://practice.expandtesting.com/otp-login#google_vignette');

    // Digita um e-mail incorreto (sem '@')
    cy.get('[name="email"]').type('practiceexpandtesting.com');

    cy.get('#btn-send-otp').click();

    cy.get('#core div.invalid-feedback')
      .should('contain.text', 'Please enter a valid email address.');
  });
});
