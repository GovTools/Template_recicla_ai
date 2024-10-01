'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; 

const Confirmation = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [verificationCode, setVerificationCode] = useState(""); 
    const router = useRouter(); 
    
    useEffect(() => {
        if (alertMessage) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
                if (alertType === "info") {
                    router.push('/'); 
                }
            }, 3000); 

            return () => clearTimeout(timer); 
        }
    }, [alertMessage, alertType, router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const isValidCode = verificationCode === "123456"; 

        if (isValidCode) {
            setAlertMessage("O código foi encaminhado com sucesso!");
            setAlertType("info");
        } else {
            setAlertMessage("Código incorreto. Tente novamente.");
            setAlertType("error"); 
        }
    };

    const handleResend = () => {
        setAlertMessage("Aguarde antes de reenviar um novo código.");
        setAlertType("warning");
    };

    return (
        <div className="flex justify-center items-center min-h-screen relative overflow-hidden font-poppins">
            <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
                <img src="/img/cadeado.png" alt="Ícone de sucesso" className="w-20 h-auto mb-6 mx-auto" />
                <h1 className="text-2xl font-bold text-green-700 mb-4">Confirmação de Cadastro</h1>
                <p className="text-gray-700 mb-4 text-lg font-semibold">Insira o código de verificação enviado para o seu número.</p>

                
                {showAlert && (
                    <>
                        {alertType === "info" && (
                            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4 transition-opacity duration-1000 ease-in-out opacity-100">
                                <p className="font-bold">Código Enviado</p>
                                <p className="text-sm">{alertMessage}</p>
                            </div>
                        )}
                        {alertType === "error" && (
                            <div role="alert" className="mb-4 transition-opacity duration-1000 ease-in-out opacity-100">
                                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Erro</div>
                                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                    <p>{alertMessage}</p>
                                </div>
                            </div>
                        )}
                        {alertType === "warning" && (
                            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-4 transition-opacity duration-1000 ease-in-out opacity-100">
                                <div className="flex">
                                    <div className="py-1">
                                        <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold">Aguarde</p>
                                        <p className="text-sm">{alertMessage}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}

                
                <form className="flex justify-center flex-wrap mb-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        maxLength={6}
                        className="w-full h-12 border-2 border-gray-300 lg:border-gray-500 rounded-lg text-center text-xl font-semibold text-black mx-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mt-6"
                        >
                            Enviar Código
                        </button>
                    </div>
                </form>

                <p className="mt-4">
                    <a href="#" onClick={handleResend} className="text-teal-900 underline hover:text-teal-700">Reenviar Código</a>
                </p>
            </div>
        </div>
    );
};

export default Confirmation;
