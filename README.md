Template Recicla AI

Estrutura do Projeto

template_recicla_ai/
├── node_modules/           # Dependências do projeto
├── package.json            # Arquivo de configuração do npm
├── package-lock.json       # Versões exatas das dependências
├── src/                    # Código fonte da aplicação
│   ├── img/                # Imagens utilizadas no projeto
│   ├── index.html          # Página principal da aplicação
│   ├── input.css           # Arquivo CSS de entrada para o Tailwind
│   ├── notificacao.html    # Página de notificação
│   └── output.css          # CSS compilado do Tailwind
├── tailwind.config.js      # Configuração do Tailwind CSS

Tecnologias Utilizadas
HTML
CSS
Tailwind CSS

Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Para verificar, execute o seguinte comando no terminal:

node -v

Instalação do Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init

Configuração do Tailwind CSS
Configure os caminhos do seu projeto no arquivo tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

Adicione as diretivas do Tailwind ao seu arquivo CSS principal (src/input.css):
@tailwind base;
@tailwind components;
@tailwind utilities;

Compile o CSS do Tailwind. Execute o seguinte comando para monitorar seus arquivos e gerar o CSS compilado:
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
