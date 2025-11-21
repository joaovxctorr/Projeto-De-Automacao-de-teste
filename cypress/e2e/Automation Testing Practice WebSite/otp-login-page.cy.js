describe('Página de Login com OTP - Automation Testing Practice', () => {
  it('deve realizar o login com sucesso usando o OTP correto', () => {
    cy.visit('https://practice.expandtesting.com/otp-login#google_vignette');
    
    cy.get('[name="email"]').type('practice@expandtesting.com');
    cy.get('#btn-send-otp').click();

    // Verifica se a mensagem informando o envio do OTP aparece corretamente
    cy.get('#otp-message')
      .should('contain.text', 'We\'ve sent an OTP code to your email:')
      .and('contain.text', 'practice@expandtesting.com');

    // Digita o OTP e envia
    cy.get('[name="otp"]').type('214365');
    cy.get('#btn-send-verify').click();

    cy.get('#flash b').should('have.text', 'You logged into a secure area!');
  });
});
