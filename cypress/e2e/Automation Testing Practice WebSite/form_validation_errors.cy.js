describe('Página de Validação de Formulário - Automation Testing Practice', () => {

  beforeEach(() => { 
    cy.visit('https://practice.expandtesting.com/form-validation');
  });

  it('deve exibir erro ao não informar o nome do contato', () => {
    cy.get('[name="ContactName"]').clear()

    cy.get('[name="contactnumber"]').type('012-3456789');
    cy.get('[name="pickupdate"]').type('2025-10-23');
    cy.get('[name="payment"]').select('card');

    cy.get('#core button.btn').click();

    cy.contains('Please enter your Contact name.').should('be.visible');
  });

  it('deve exibir erro ao não informar o número de contato', () => {
    cy.get('[name="ContactName"]').clear().type('John Smith');
    cy.get('[name="pickupdate"]').type('2025-10-23');
    cy.get('[name="payment"]').select('card');

    cy.get('#core button.btn').click();

    cy.contains('Please provide your Contact number.').should('be.visible');
  });

  it('deve exibir erro ao não informar a data', () => {
    cy.get('[name="ContactName"]').clear().type('John Smith');
    cy.get('[name="contactnumber"]').type('012-3456789');
    cy.get('[name="payment"]').select('card');

    cy.get('#core button.btn').click();

    cy.contains('Please provide valid Date.').should('be.visible');
  });

  it('deve exibir erro ao não selecionar o método de pagamento', () => {
    cy.get('[name="ContactName"]').clear().type('John Smith');
    cy.get('[name="contactnumber"]').type('012-3456789');
    cy.get('[name="pickupdate"]').type('2025-10-23');

    cy.get('#core button.btn').click();

    cy.contains('Please select the Paymeny Method.').should('be.visible');
  });

});

