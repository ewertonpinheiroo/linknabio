'use client';
import { useEffect } from 'react';

export default function RedirecionarWhatsApp() {
  const abrirLink = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5592993669080&text&type=phone_number&app_absent=0';

    // Abrir nova aba - força navegador externo em muitos casos
    window.open(url, '_blank');
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: '#f6f6f6',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <p>Para continuar, clique no botão abaixo. Você será redirecionado para o WhatsApp.</p>
      <button 
        onClick={abrirLink}
        style={{
          marginTop: '20px',
          padding: '15px 25px',
          fontSize: '16px',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Abrir no WhatsApp
      </button>
      <small style={{ marginTop: '15px', color: '#555' }}>
        Se não funcionar, toque nos 3 pontinhos do navegador e selecione "Abrir no navegador".
      </small>
    </div>
  );
}
