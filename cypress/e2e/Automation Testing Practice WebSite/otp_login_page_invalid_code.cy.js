describe('OTP Login Page', () => {
  it('deve exibir mensagem de erro ao inserir um código OTP incorreto', () => {
    cy.visit('https://practice.expandtesting.com/otp-login#google_vignette');

    cy.get('[name="email"]').type('practice@expandtesting.com');
    cy.get('#btn-send-otp').click();

    // Insere um código OTP incorreto
    cy.get('[name="otp"]').type('219048');
    cy.get('#btn-send-verify').click();

    cy.get('#otp-message')
      .should(
        'have.text',
        'The provided OTP code is incorrect. Please check your code and try again.'
      );
  });
});
