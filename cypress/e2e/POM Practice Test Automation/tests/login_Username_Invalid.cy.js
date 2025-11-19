import LoginPage from '../pages/LoginPage'

describe('Login Inválido - Senha Incorreta', () => {
  it('Deve exibir mensagem de erro ao inserir senha errada', () => {
    
    LoginPage.acessarPagina()

    LoginPage.preencherUsuario('student')
    LoginPage.preencherSenha('WrongPassword') 
    
    LoginPage.clicarLogin()
    LoginPage.validarMensagemErro('Your password is invalid!')
  })
})
