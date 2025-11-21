import LoginPage from '../pages/LoginPage';

describe('Login Inválido - Usuario Incorreto', () => {

  it('Deve exibir mensagem de erro ao inserir usuario errado', () => {

    LoginPage.acessarPagina()

    LoginPage.preencherUsuario('studemt'); 
    LoginPage.preencherSenha('Password123');
    LoginPage.enviar();

    LoginPage.validarMensagemErro('Your password is invalid!');

  });

});
