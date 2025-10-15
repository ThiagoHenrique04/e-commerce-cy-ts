import { faker } from '@faker-js/faker';

export function gerarDadosRegistro() {
    const senha = faker.internet.password({ length: 8 });
    return {
        primeiroNome: faker.person.firstName(),
        ultimoNome: faker.person.lastName(),
        email: faker.internet.email(),
        telefone: faker.phone.number(),
        senha: senha,
        confirmacaoSenha: senha
    }
}