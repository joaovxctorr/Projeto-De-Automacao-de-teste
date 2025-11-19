import LoginPage from '../pages/LoginPage'

describe('Login Valido', () => {

  it('Deve realizar login com sucesso', () => {

    LoginPage.acessarPagina()

    LoginPage.preencherUsuario('student')
    LoginPage.preencherSenha('Password123')

    LoginPage.clicarLogin()

    LoginPage.validarUrlPosLogin()

    LoginPage.abrirArtigo()

    LoginPage.validarMensagemSucesso()

    LoginPage.validarBotaoLogoutVisivel()
  })

})
