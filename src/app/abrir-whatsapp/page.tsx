'use client';
import { useEffect } from 'react';

export default function RedirecionarWhatsApp() {
  useEffect(() => {
    const abrirIntent = () => {
      // A intenção aqui é forçar o Android a abrir o WhatsApp ou sugerir apps compatíveis
      window.location.href = `intent://send/?phone=5592993669080#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end`;
    };

    setTimeout(abrirIntent, 300); // Pequeno delay
  }, []);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: '#f6f6f6',
      fontFamily: 'sans-serif'
    }}>
      <p>Redirecionando para o WhatsApp...</p>
    </div>
  );
}
