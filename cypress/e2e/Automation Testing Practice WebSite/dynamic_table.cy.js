describe('Tabela Dinâmica - Practice Expand Testing', () => {
  /*
    A página "Dynamic Table" muda a posição das colunas e os valores a cada atualização.

    Este teste identifica dinamicamente a posição da coluna "CPU"
    e compara o valor de CPU do processo "Chrome" com o valor exibido no rótulo amarelo.
  */

  it('Deve comparar o valor de CPU do Chrome na tabela com o valor exibido na etiqueta amarela', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table');

    // Captura o valor do rótulo amarelo (Chrome CPU)
    cy.get('#chrome-cpu')
      .invoke('text')
      .then((labelText) => {
        const cpuLabelValue = labelText.split(':')[1].trim(); // Ex: "7.3%"

        // Encontra a posição (índice) da coluna "CPU"
        cy.get('table thead tr th')
          .then(($headers) => {
            let cpuColumnIndex = -1;

            $headers.each((index, header) => {
              if (header.innerText.trim() === 'CPU') {
                cpuColumnIndex = index;
              }
            });

            // Garante que encontrou a coluna
            expect(cpuColumnIndex, 'Posição da coluna CPU encontrada').to.be.greaterThan(-1);

            // Encontra a linha do Chrome e captura o valor na coluna CPU
            cy.contains('table tbody tr', 'Chrome')
              .find('td')
              .eq(cpuColumnIndex)
              .invoke('text')
              .then((cpuTableValue) => {
                // Compara os valores
                expect(cpuTableValue.trim()).to.eq(cpuLabelValue);
              });
          });
      });
  });
});

it('1', function() {
  cy.visit('https://practice.expandtesting.com/dynamic-pagination-table')
  
});
