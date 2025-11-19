class LoginPage {

  acessarPagina() {
    cy.visit('https://practicetestautomation.com/practice-test-login')
  }

  preencherUsuario(usuario) {
    cy.get('[name="username"]').click().type(usuario)
  } 

  preencherSenha(senha) {
    cy.get('[name="password"]').click().type(senha)
  }

  clicarLogin() {
    cy.get('#submit').click()
  }

  // Valida URL de sucesso após login
  validarUrlPosLogin() {
    cy.url().should('include', '/logged-in-successfully/')
  }

  // Abrir artigo da página pós-login
  abrirArtigo() {
    cy.get('#loop-container article').click()
  }

  //Validar mensagem de sucesso 
  validarMensagemSucesso() {
    cy.get('#loop-container strong')
      .should('have.text', 'Congratulations student. You successfully logged in!')
  }

  validarBotaoLogoutVisivel() {
    cy.get('#loop-container a.has-text-color')
      .should('be.visible')
  }

  //Validar mensagem de erro 
  validarMensagemErro(mensagem) {
    cy.get('#error').should('have.text', mensagem)
  }
}

export default new LoginPage()
