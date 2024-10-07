'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Verification() {
  const [verificationCode, setVerificationCode] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    if (verificationCode === '123456') {
      router.push('/dashboard'); 
     
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Verificação em duas etapas</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Digite o código"
              className="border border-gray-300 p-2 rounded-md"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Verificar
            </button>
          </form>
        </div>
      </div>

     
      <div className="w-1/2 bg-gray-200 flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl font-bold mb-6">Bem-vindo!</h2>
        <p>Verifique seu código para acessar sua conta.</p>
      </div>
    </div>
  );
}
