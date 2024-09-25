# Template Recicla AI

---

## Estrutura do Projeto

```bash
template_recicla_ai/
├── node_modules/            # Dependências do projeto
├── package.json             # Arquivo de configuração do npm
├── package-lock.json        # Versões exatas das dependências
├── src/                     # Código fonte da aplicação
│   ├── img/                 # Imagens utilizadas no projeto
│   ├── index.html           # Página principal da aplicação
│   ├── input.css            # Arquivo CSS de entrada para o Tailwind
│   ├── notificacao.html     # Página de notificação
│   └── output.css           # CSS compilado do Tailwind
├── tailwind.config.js       # Configuração do Tailwind CSS
└── .vscode/                 # Configurações do Visual Studio Code
```

## Tecnologias Utilizadas
- HTML
- CSS
- Tailwind CSS

## Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Para verificar se o Node.js está instalado, execute o seguinte comando no terminal:

```bash
node -v
```

## Instalação do Tailwind CSS
Para instalar o Tailwind CSS, execute os seguintes comandos no terminal:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

## Configuração do Tailwind CSS
Configure os caminhos do seu modelo no arquivo `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Adicione as diretivas do Tailwind ao seu CSS principal (crie um arquivo chamado `input.css` na pasta `src`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Compilação do CSS
Inicie o processo de construção do Tailwind CLI. Execute o seguinte comando para monitorar seus arquivos de modelo e gerar o CSS compilado:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Instruções de Uso
Para iniciar o projeto, abra o arquivo `index.html` no seu navegador. Recomenda-se usar a extensão Live Server no Visual Studio Code para uma experiência de desenvolvimento mais eficiente.

### Para instalar a extensão Live Server:
1. No Visual Studio Code, vá para a aba de Extensões (Ctrl+Shift+X).
2. Procure por Live Server e instale a extensão.
3. Após instalar, clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

## Utilizando Tailwind CSS
Você pode começar a usar o Tailwind CSS em seu HTML adicionando o seguinte código ao `<head>` do seu arquivo `index.html`:

```html
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
```
