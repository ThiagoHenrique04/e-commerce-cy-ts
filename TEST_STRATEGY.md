# 🧪 Estratégia de Testes - Projeto E-commerce Playground

## 🔍 Objetivo

Este projeto visa automatizar os principais fluxos de um e-commerce de demonstração (https://ecommerce-playground.lambdatest.io), utilizando Cypress com TypeScript, seguindo o padrão BDD (Behavior-Driven Development) para definição de cenários de testes.

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** TypeScript
- **Framework de Teste:** Cypress
- **Padrão de Projeto:** Page Object Model (POM)
- **Estilo de Especificação:** BDD (Gherkin)
- **Organização de Código:**
  - `elements/`: localizadores
  - `actions/`: ações encapsuladas das páginas
  - `e2e/`: cenários de testes
  - `utils/`: funções auxiliares
  - `fixtures/`: dados de teste
  - `support/`: configuração global e comandos customizados

---

## 🌐 Escopo das Páginas / Funcionalidades

- Login / Registro
- Home
- Menu de categorias
- Favoritos
- Carrinho de compras
- Comparar produtos
- Checkout

---

## ✅ Critérios de Aceitação dos Testes

- O fluxo de teste deve ser o mais próximo possível do comportamento real do usuário
- Todos os elementos devem ser validados (textos, preços, mensagens, navegação)
- O teste deve rodar de forma independente
- Erros esperados devem ser tratados com asserts específicos

---

## 🧠 Abordagem de Testes

1. **Identificação dos fluxos principais e secundários**
2. **Definição dos cenários em Gherkin manualmente**
3. **Automatização usando Page Object Model com Cypress**
4. **Uso de fixtures para dados dinâmicos**
5. **Testes executados em pipeline local e futura integração com CI/CD**

---

## 🗂️ Estrutura de Pastas

```
cypress/
├── e2e/
├── elements/
├── pages/
├── support/
├── utils/
├── fixtures/
```

---

## 📜 Exemplos de Cenários (formato BDD)

### 🧪 Login com sucesso

```gherkin
Funcionalidade: Login de usuário

Cenário: Login com credenciais válidas
  Dado que o usuário acessa a página de login
  E preenche email e senha válidos
  Quando clica no botão "Login"
  Então deve ser redirecionado para a página da conta
  E deve visualizar a mensagem de boas-vindas com seu nome
```

### 🛒 Finalização de compra

```gherkin
Funcionalidade: Finalização de compra

Cenário: Usuário adiciona produto e finaliza compra
  Dado que o usuário está na Home
  E acessa a página de um produto
  Quando clica em "Adicionar ao carrinho"
  E acessa o carrinho e prossegue para o checkout
  E preenche os dados de entrega e pagamento
  Então a compra deve ser finalizada com sucesso
  E deve exibir a mensagem de confirmação de pedido
```

---

## 🚫 Riscos e Limitações

- O ambiente pode ser instável por ser público (flutuações na resposta do servidor)
- Possibilidade de interferência de outros usuários no ambiente de testes compartilhado
- Algumas funcionalidades podem não persistir dados (ex: login, carrinho), exigindo revalidação

---

## 📈 Métricas Esperadas

- Cobertura dos principais fluxos do e-commerce
- Tempo médio de execução dos testes: < 2 min
- Taxa de falha máxima aceitável: 0% em cenários críticos

---

## 📅 Manutenção

- Testes devem ser mantidos com nomenclatura clara e organizada
- A cada novo fluxo identificado, deve-se adicionar o cenário Gherkin correspondente
- Atualizações no sistema exigem revalidação dos testes automatizados