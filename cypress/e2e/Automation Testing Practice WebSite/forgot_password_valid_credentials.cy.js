describe('Esqueceu a Senha', () => {
  it('Deve exibir confirmação ao enviar e-mail válido para redefinir a senha', function() {
    cy.visit('https://practice.expandtesting.com/forgot-password');

    cy.get('[name="email"]').type('123@gmail.com');
    cy.get('#forgot_password button.d-block').click();

    cy.get('#confirmation-alert')
      .should('be.visible')
      .invoke('text') // pega o texto bruto do div. 
      .then((text) => {
        const normalizedText = text.trim().replace(/\s+/g, ' '); // remove quebras de linha e múltiplos espaços
        expect(normalizedText).to.eq('An e-mail has been sent to you which explains how to reset your password.'); // compara o texto limpo com a mensagem exata.
      });
  });
});
