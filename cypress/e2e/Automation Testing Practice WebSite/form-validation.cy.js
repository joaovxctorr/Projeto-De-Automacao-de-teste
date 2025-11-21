describe('Página de Validação de Formulário - Automation Testing Practice', () => {
  it('deve preencher e validar o formulário com sucesso', () => {
    cy.visit('https://practice.expandtesting.com/form-validation');

    cy.get('[name="ContactName"]').clear().type('John Smith');

    cy.get('[name="contactnumber"]').clear().type('012-3456789');

    cy.get('[name="pickupdate"]').type('2025-12-25');

    cy.get('[name="payment"]').select('card');

    cy.get('#core button.btn').click();

    cy.get('#core p').should('have.text', 'Thank you for validating your ticket');
  });
});
