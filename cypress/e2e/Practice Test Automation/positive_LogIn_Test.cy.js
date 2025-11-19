describe('Login Valido', () => {

  it('Deve realizar login com sucesso', () => {

    cy.visit('https://practicetestautomation.com/practice-test-login')

    cy.get('[name="username"]').click().type('student');

    cy.get('[name="password"]').click().type('Password123');

    cy.get('#submit').click();

    // Verificar a URL 
    cy.url().should('include', '/logged-in-successfully/');

    cy.get('#loop-container article').click();

    cy.get('#loop-container strong')
      .should('have.text', 'Congratulations student. You successfully logged in!');

    cy.get('#loop-container a.has-text-color')
      .should('be.visible');
  })

});
