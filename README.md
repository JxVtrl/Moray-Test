# Moray.Ai - Frontend Developer Case

Este projeto foi desenvolvido como parte do case técnico para a posição de Frontend Developer na Moray.Ai. Ele consiste em um mapa interativo que exibe os bairros e sua evolução populacional ao longo do tempo.

## Tarefas do Case

As principais tarefas do desafio foram:

1. Renderizar as geometrias dos bairros no mapa;
2. Exibir a evolução populacional dos bairros ao clicar em uma área específica.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **React** (v18.2.0) - Biblioteca principal para construção da interface.
- **Vite** (v5.1.4) - Ferramenta de build e desenvolvimento rápido.
- **TypeScript** (v5.3.3) - Tipagem estática para maior segurança e manutenibilidade.
- **Leaflet** (v1.9.4) - Biblioteca de mapas interativos.
- **React-Leaflet** (v4.2.1) - Integração do Leaflet com React.
- **ESLint** (v8.57.0) - Análise de código para garantir qualidade e padronização.
- **SASS** (v1.71.1) - Pré-processador CSS para estilização modular e reutilizável.

## Setup do Projeto

### Pré-requisitos

Certifique-se de que você tenha o Node.js (v18) instalado:

```bash
node -v
```

Caso não tenha, você pode instalar utilizando o [nvm](https://github.com/nvm-sh/nvm#installing-and-updating). Para configurar a versão correta do Node, execute na raiz do projeto:

```bash
nvm install 18
nvm use 18
```

### Instalando as dependências

Execute o seguinte comando na raiz do projeto:

```bash
npm install
```

### Rodando a aplicação

Para iniciar o ambiente de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção do projeto.
- `npm run preview`: Inicia um servidor para visualizar o build.
- `npm run lint`: Executa o linting do código para verificar erros.
- `npm run type-check`: Verifica a consistência dos tipos TypeScript.
- `npm run format`: Formata o código usando Prettier.
- `npm run test`: Executa testes unitários com Vitest.
- `npm run analyze`: Analisa o bundle gerado pelo Vite.

## Estrutura do Projeto

```
├── public/             # Arquivos estáticos
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── utils/          # Funções utilitárias
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Ponto de entrada do React
├── .eslintrc.cjs       # Configuração do ESLint
├── tsconfig.json       # Configuração do TypeScript
├── vite.config.ts      # Configuração do Vite
└── package.json        # Dependências e scripts
```

## Contato

Em caso de dúvidas, entre em contato pelo email: `joaoviniciusvitral@hotmail.com`.

