import React from 'react';

export default function SignIn() {
  return (
    <div className="relative flex h-screen">
      
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100 z-10">
        <h1 className="text-2xl font-bold mb-6 text-black">Sign In</h1>
        <p className="mb-4 text-gray-500">Your Social Campaigns</p>

        <div className="flex space-x-4 mb-6 w-full justify-center">
          <button className="bg-white border border-gray-300 p-2 w-64 text-black rounded-md flex items-center justify-center space-x-2">
            <img src="/img/google.png" alt="Logo da Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>

          <button className="bg-white border border-gray-300 p-2 w-64 text-black rounded-md flex items-center justify-center space-x-2">
            <img src="/img/apple.png" alt="Logo da Apple" className="w-7 h-7" />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className="text-gray-500 mb-4">Or with email</div>
        <form className="w-full max-w-lg flex flex-col items-center">
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 mb-4 w-[33rem] text-black rounded-md"
          />

          <input
            type="text"
            placeholder="CEP"
            className="border p-2 mb-4 w-[33rem] text-black rounded-md"
          />
          <button className="bg-blue-500 text-white p-2 w-[33rem] rounded-md">
            Submit
          </button>
        </form>

        <p className="mt-4 text-gray-500">
          Not a Member yet? <a href="#" className="text-blue-500">Sign up</a>
        </p>
      </div>

  
      <div className="flex flex-col justify-between items-center w-1/2 bg-blue-500 text-white p-8 z-10">
        <img
          src="/img/logo-teste.png"
          alt="Metronic"
          className="w-30 h-20 mb-4"
        />

        <div className="flex justify-center mb-2">
          <img src="/img/testes.png" alt="Imagem teste" className="w-96 h-80" />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold mb-1">Rápido, Eficiente e Produtivo</h1>
          <p>
            Realizando ações difíceis, desprezando obstáculos! Tendência que dirige e incita o indivíduo a, temerariamente, realizar ações difíceis, desprezando obstáculos e situações de perigo; ousadia, intrepidez, denodo. Qualidade de quem ou do que se caracteriza pela inovação, pelo arrojo, em oposição ao já estabelecido e aceito.
          </p>
        </div>
      </div>
    </div>
  );
}
