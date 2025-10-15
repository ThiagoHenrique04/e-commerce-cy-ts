import { RegistroElements } from "../../elements/registro/registro_elements";
import { MenuElements } from "../../elements/common/menu_elements";
export class RegistroPage {

    static AcessarPaginaRegistro(): void {
        cy.xpath(MenuElements.dropdownMyAccount)
            .should('be.visible')
            .click()
        cy.xpath(RegistroElements.btnContinue)
            .should('be.visible')
            .click()
        cy.get(RegistroElements.tituloPagina)
            .should('contain.text', 'Register Account')
    }

    static preencherPrimeiroNome(primeiro_nome: string): void {
        cy.get(RegistroElements.inputPrimeiroNome).should('be.visible').type(primeiro_nome)
    }

    static preencherUltimoNome(ultimo_nome: string): void {
        cy.get(RegistroElements.inputUltimoNome).should('be.visible').type(ultimo_nome)
    }

    static preencherEmail(email: string): void {
        cy.get(RegistroElements.inputEmail).should('be.visible').type(email)
    }

    static preencherTelefone(telefone: string): void {
        cy.get(RegistroElements.inputTelefone).should('be.visible').type(telefone)
    }

    static preencherSenha(senha: string): void {
        cy.get(RegistroElements.inputSenha).should('be.visible').type(senha)
    }

    static preencherConfirmacaoSenha(confirmacao_senha: string): void {
        cy.get(RegistroElements.inputConfirmarSenha).should('be.visible').type(confirmacao_senha)
    }

    static aceitarTermos(): void {
        cy.get(RegistroElements.checkboxTermos).click()
    }

    static checkNewsletter(): void {
        cy.get(RegistroElements.checkboxNewsletter).click()
    }

    static clicarBtnSubmit(): void {
        cy.get(RegistroElements.btnSubmit).click()
    }

    static validarMsgAlerta(msg: string): void {
        cy.get(RegistroElements.msgAlertErro).should('contain.text', msg)
    }

    static validarMsgCampo(msg: string): void {
        cy.get(RegistroElements.msgErroCampo).should('contain.text', msg)
    }

    static validarRegistroComSucesso(msg: string): void {
        cy.get(RegistroElements.tituloPagina).should('contain.text', msg)
    }
}