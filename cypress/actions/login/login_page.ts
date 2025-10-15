import { Login_Elements } from "../../elements/login/login_elements";
import { MenuElements } from "../../elements/common/menu_elements";

export class Login_Page {

    static acessar_pagina_login(): void {
        cy.xpath(MenuElements.dropdownMyAccount)
            .should('be.visible')
            .click()
        cy.get(Login_Elements.input_email).should('be.visible')
    }

    static preencher_email(email: string): void {
        cy.get(Login_Elements.input_email)
            .should('be.visible')
            .clear()
            .type(email)
    }

    static preencher_password(password: string): void {
        cy.get(Login_Elements.input_password)
            .should('be.visible')
            .clear()
            .type(password)
    }

    static clicar_btn_login(): void {
        cy.get(Login_Elements.btn_login)
            .should('be.visible')
            .click()
    }

    static validar_msg_erro(texto_esperado: string): void {
        cy.get(Login_Elements.msg_erro)
            .should('be.visible')
            .and('contain.text', texto_esperado)
    }

    static validar_login_sucesso(texto_esperado: string): void {
        cy.get(Login_Elements.titulo_minha_conta)
            .should('be.visible')
            .and('contain.text', texto_esperado)
    }
}
