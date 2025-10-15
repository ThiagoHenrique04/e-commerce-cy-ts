import { RegistroPage } from "../actions/registro/registro_page"
import { gerar_dados_login } from '../utils/faker_utils';


describe('Testes da funcionalidade de Resgistro de Usúario', () => {
    beforeEach('Acessar site e tela de registrar usuario', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        RegistroPage.AcessarPaginaRegistro()
    })


    it('001 - Cenário Principal - Registrar usuario com sucesso', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarRegistroComSucesso('Your Account Has Been Created!')
    })

    it('002 - Tentar registrar usuario com e-mail existente', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail('teste@teste.com')
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgAlerta('Warning: E-Mail Address is already registered!')
    })

    it('003 - Tentar registrar usuario sem preecher primeiro nome', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('First Name must be between 1 and 32 characters!')
    })

    it('004 - Tentar registrar usuario sem preecher ultimo nome', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('Last Name must be between 1 and 32 characters!')
    })

    it('005 - Tentar registrar usuario sem preecher email', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('E-Mail Address does not appear to be valid!')
    })

    it('006 - Tentar registrar usuario com email invalido', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail('teste@teste')
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('E-Mail Address does not appear to be valid!')
    })

    it('007 - Tentar registrar usuario sem preencher campo senha', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('Password must be between 4 and 20 characters!')
    })

    it('008 - Tentar registrar usuario sem preencher campo confirmação de senha', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('Password confirmation does not match password!')
    })

    it('009 - Tentar registrar usuario com campo senha campo senha invalido', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha('123')
        RegistroPage.preencherConfirmacaoSenha('123')
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('Password must be between 4 and 20 characters!')
    })

    it('010 - Tentar registrar usuario com campo confimação senha invalido', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha('12345')
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgCampo('Password confirmation does not match password!')
    })

    it('011 - Tentar registrar usuario sem aceitar termos e condições', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarMsgAlerta('Warning: You must agree to the Privacy Policy!')
    })

    it('012 - Registrar usuario aceitando Newsletter ', () => {
        const dados = gerar_dados_login();

        RegistroPage.preencherPrimeiroNome(dados.primeiroNome)
        RegistroPage.preencherUltimoNome(dados.ultimoNome)
        RegistroPage.preencherEmail(dados.email)
        RegistroPage.preencherTelefone(dados.telefone)
        RegistroPage.preencherSenha(dados.senha)
        RegistroPage.preencherConfirmacaoSenha(dados.senha)
        RegistroPage.checkNewsletter()
        RegistroPage.aceitarTermos()
        RegistroPage.clicarBtnSubmit()
        RegistroPage.validarRegistroComSucesso('Your Account Has Been Created!')

    })
})



