// src/pages/ConfirmacaoCadastro.js
import Head from 'next/head';

const ConfirmacaoCadastro = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmação de Cadastro</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <body className="flex justify-center items-center min-h-screen relative overflow-hidden font-poppins">
        <div className="bg-white p-8 rounded-lg shadow-2xl text-center relative z-10 transform transition-transform duration-300 hover:scale-105">
          <img src="/img/templateReciclagem/cadeado.png" alt="Ícone de sucesso" className="w-20 h-auto mb-6 mx-auto" />
          <h1 className="text-2xl font-bold text-green-700 mb-4">Confirmação de Cadastro</h1>
          <p className="text-gray-700 mb-4 text-lg font-semibold">Insira o código de verificação enviado para o seu número.</p>

          {/* Formulário de código de verificação */}
          <form className="flex justify-center flex-wrap mb-4">
            <input type="text" maxLength="1" className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold mx-1 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            <input type="text" maxLength="1" className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold mx-1 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            <input type="text" maxLength="1" className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold mx-1 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            <input type="text" maxLength="1" className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold mx-1 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            <input type="text" maxLength="1" className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold mx-1 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            <input type="text" maxLength="1" className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold mx-1 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
          </form>

          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
            Enviar Código
          </button>

          <p className="mt-4">
            <a href="#" className="text-teal-900 underline hover:text-teal-700">Reenviar Código</a>
          </p>
        </div>
      </body>
    </>
  );
};

export default ConfirmacaoCadastro;
