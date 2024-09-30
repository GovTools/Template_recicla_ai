import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/output.css" rel="stylesheet" />
        <title>Coleta Seletiva de Gravataí</title>
      </Head>

      <div className="font-poppins bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 w-full max-w-2xl transform transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
          <h1 className="text-3xl font-bold text-center text-teal-700 mb-4">
            Coleta Seletiva de Gravataí
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Receba notificações quando o caminhão de coleta estiver próximo de você.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <img
              src="/img/templateReciclagem/ilustração-removebg-preview.png"
              alt="Imagem de coleta seletiva"
              className="hidden md:block w-1/2 max-w-xs object-cover"
            />

            {/* Formulário */}
            <form className="w-full mt-4 md:mt-0 md:w-1/2 space-y-6">
              <div>
                <label htmlFor="whatsapp" className="block text-gray-700 font-medium">
                  Número WhatsApp
                </label>
                <input
                  id="whatsapp"
                  className="block w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ex: (51) 91234-5678"
                  type="tel"
                  required
                />
              </div>

              <div>
                <label htmlFor="cep" className="block text-gray-700 font-medium">
                  CEP
                </label>
                <input
                  id="cep"
                  className="block w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ex: 94000-000"
                  type="text"
                  required
                />
              </div>

              {/* Checkbox de termos e condições */}
              <div className="flex items-start space-x-2">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  required
                />
                <label htmlFor="link-checkbox" className="text-sm text-gray-900">
                  Concordo com os{' '}
                  <a href="#" className="text-teal-600 hover:underline">
                    termos e condições
                  </a>
                  .
                </label>
              </div>

              {/* Botão de cadastro */}
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
              >
                Cadastrar
              </button>
            </form>
          </div>

          {/* Rodapé */}
          <footer className="mt-6 text-center text-sm text-gray-500">
            <p>© 2024 GovTools. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
