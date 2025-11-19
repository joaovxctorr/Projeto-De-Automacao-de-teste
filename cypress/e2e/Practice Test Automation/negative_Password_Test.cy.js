describe('Login Invalido - Senha Incorreta', () => {

  it('Deve exibir mensagem de erro ao inserir senha errada', () => {
    
    cy.visit('https://practicetestautomation.com/practice-test-login')
    cy.get('[name="username"]').click().type('student');
    cy.get('[name="password"]').click().type('Password345');
    cy.get('#submit').click();
    cy.get('#error').click();
    cy.get('#error').should('have.text', 'Your password is invalid!');
    
    });
});