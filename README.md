# Template Recicla AI

## Descrição
Este projeto é uma aplicação web chamada **Template Recicla AI**, desenvolvida para [descrever o que o aplicativo faz, por exemplo, "gerenciar informações sobre reciclagem"]. Ele foi construído utilizando **HTML**, **CSS** e **Tailwind CSS**. O objetivo é [descrever o objetivo ou a motivação do projeto, por exemplo, "oferecer uma interface intuitiva para educar sobre práticas de reciclagem"].

## Estrutura do Projeto
template_recicla_ai/ ├── node_modules/ # Dependências do projeto ├── package.json # Arquivo de configuração do npm ├── package-lock.json # Versões exatas das dependências ├── src/ # Código fonte da aplicação │ ├── img/ # Imagens utilizadas no projeto │ ├── index.html # Página principal da aplicação │ ├── input.css # Arquivo CSS de entrada para o Tailwind │ ├── notificacao.html # Página de notificação │ └── output.css # CSS compilado do Tailwind ├── tailwind.config.js # Configuração do Tailwind CSS └── .vscode/ # Configurações do Visual Studio Code


## Tecnologias Utilizadas
- **HTML**
- **CSS**
- [**Tailwind CSS**](https://tailwindcss.com)

## Instalação
Para instalar o Tailwind CSS, execute os seguintes comandos no terminal:

```bash
npm install -D tailwindcss
npx tailwindcss init

## Pré-requistos
Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar se está instalado executando o seguinte comando no terminal:

```bash
node -v

##Configuração do Tailwind CSS
Configure os caminhos do seu modelo no arquivo tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

Adicione as diretivas Tailwind ao seu CSS principal. Crie um arquivo chamado input.css na pasta src e adicione as seguintes linhas:
@tailwind base;
@tailwind components;
@tailwind utilities;

Inicie o processo de construção do Tailwind CLI. Execute o seguinte comando para escanear seus arquivos de modelo e criar seu CSS:

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch


Instruções de Uso
Para iniciar o projeto, abra o arquivo index.html no seu navegador. Recomenda-se usar a extensão Live Server no Visual Studio Code para uma experiência de desenvolvimento mais fácil.

Para instalar a extensão Live Server:
No Visual Studio Code, vá para a aba de Extensões (Ctrl+Shift+X).
Procure por "Live Server" e instale a extensão.
Após instalar, clique com o botão direito no index.html e selecione "Open with Live Server".
Você pode começar a usar o Tailwind CSS em seu HTML adicionando o seguinte código ao <head> do seu arquivo index.html:

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>


Próximos Passos
Integrando Next.js
O próximo passo para o desenvolvimento do Template Recicla AI é integrar o Next.js, um framework React para a construção de aplicações web. O Next.js oferece funcionalidades como renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e suporte a rotas.

Instalação do Next.js
No terminal, na raiz do seu projeto, execute o seguinte comando para instalar o Next.js:

npm install next react react-dom


### Considerações Finais
Esse formato melhora a legibilidade e estrutura do documento, destacando melhor as seções importantes e usando formatação consistente. Se precisar de mais alguma alteração, é só avisar!
# Template_recicla_ai
