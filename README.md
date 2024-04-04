# form-cadastro-relatorios

Objetivos do Projeto
Desenvolvimento de um Formulário de Cadastro de Relatórios: O formulário deve conter 14 campos, que incluem caixas de texto (textbox), seletores (select), listas suspensas (dropdown) e campos para anexar arquivos.

Campo de Participante com Funcionalidades Específicas:

Deve permitir a entrada de múltiplos nomes, separados por vírgula.
Deverá sugerir nomes existentes no banco de dados à medida que o usuário digita, funcionando como um sistema de auto-completar.
Se um nome digitado não existir no banco de dados, o usuário pode adicioná-lo manualmente, e este deve ser automaticamente registrado no banco.
Envio de Dados e Anexos por E-mail: Após o preenchimento, os dados coletados pelo formulário, juntamente com quaisquer anexos, devem ser enviados para um endereço de e-mail específico.

Registro de Dados na Base de Dados: Simultaneamente ao envio do e-mail, os dados coletados devem ser registrados em uma base de dados.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/form-cadastro-relatorios.git
cd form-cadastro-relatorios
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
