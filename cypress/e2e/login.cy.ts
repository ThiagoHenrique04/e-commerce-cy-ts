import { Login_Page } from "../actions/login/login_page";
import { gerar_dados_login } from '../utils/faker_utils';

const MSG_ERRO_LOGIN = 'Warning: No match for E-Mail Address and/or Password.'
const MSG_ERRO_CAMPO_PASSWORD = 'Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.'

describe('Testes da funcionalidade de login', () => {
    beforeEach('Acessar site e página de login', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        Login_Page.acessar_pagina_login()
    })

    it('001 - Cenário Principal - Login com sucesso', () => {
        // Arrange
        const EMAIL_VALIDO = 'teste@teste29.com' // substitua por um usuário válido do ambiente se necessário
        const SENHA_VALIDA = '1234'

        // Act
        Login_Page.preencher_email(EMAIL_VALIDO)
        Login_Page.preencher_password(SENHA_VALIDA)
        Login_Page.clicar_btn_login()

        // Assert
        Login_Page.validar_login_sucesso('My Account')
    })

    it('002 - Tentar login com email/senha inválidos', () => {
        const dados = gerar_dados_login();

        Login_Page.preencher_email(dados.email)
        Login_Page.preencher_password(dados.senha)
        Login_Page.clicar_btn_login()

        Login_Page.validar_msg_erro(MSG_ERRO_LOGIN)
    })

    it('003 - Tentar login sem preencher email', () => {
        const dados = gerar_dados_login();

        // Não preencher email
        Login_Page.preencher_password(dados.senha)
        Login_Page.clicar_btn_login()

        Login_Page.validar_msg_erro(MSG_ERRO_CAMPO_PASSWORD)
    })
})
