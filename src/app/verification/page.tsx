'use client';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function VerificationPage() {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  
    const searchParams = useSearchParams();
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
  useEffect(() => {
    const phone = searchParams.get('phoneNumber');
    if (phone) {
      setPhoneNumber(phone);
    }
  }, [searchParams]);

  const handleBack = () => {
    router.push('/signin');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsVerifying(true);
    setErrorMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push('/dashboard');
    } catch (error) {
      setIsVerifying(false);
      setErrorMessage('Invalid verification code');
    }
  };

  if (!phoneNumber) {
    return (
      <div className="relative flex h-screen">
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }


  const maskedPhoneNumber = phoneNumber.replace(/.(?=.{4})/g, '*'); 

  return (
    <div className="relative flex h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100 z-10 p-8">
        <h1 className="text-2xl font-bold mb-6 text-black">Verification</h1>
        {isVerifying ? (
          <p className="mb-4 text-gray-500">Verifying your information...</p>
        ) : (
          <p className="mb-4 text-gray-500">
            Digite o código de verificação que enviamos para o telefone final {maskedPhoneNumber}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex space-x-4 mb-6 w-full justify-center">
          <input
            type="text"
            className="border border-gray-300 p-2 w-64 text-black rounded-md"
            placeholder="Digite seu código de segurança de 6 dígitos"
            required
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </form>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <p className="mt-4 text-gray-500">
          Não recebeu o código? <a href="#" className="text-blue-500 underline">Reenviar</a> ou <a href="#" className="text-blue-500 underline">Ligue para nós</a>
        </p>
      </div>

      <div className="flex flex-col justify-between items-center w-1/2 bg-blue-500 text-white p-8 z-10">
        <img src="/img/logo-teste.png" alt="Metronic" className="w-30 h-20 mb-4" />
        <div className="flex justify-center mb-2">
          <img src="/img/testes.png" alt="Imagem teste" className="w-96 h-80" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-1">Rápido, Eficiente e Produtivo</h1>
          <p>
            Realizando ações difíceis, desprezando obstáculos! Qualidade de quem ou do que se caracteriza pela inovação.
          </p>
        </div>
      </div>
    </div>
  );
}
