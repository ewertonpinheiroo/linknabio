'use client';
import { useEffect } from 'react';

export default function RedirecionarWhatsApp() {
  useEffect(() => {
    const redirecionar = () => {
      // Redireciona após pequeno delay para evitar bloqueio
      setTimeout(() => {
        window.location.href = 'https://api.whatsapp.com/send/?phone=5592993669080&text&type=phone_number&app_absent=0';
      }, 300); 
    };

    redirecionar();
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
