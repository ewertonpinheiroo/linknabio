'use client';
import { useEffect } from 'react';

export default function AbrirWhatsapp() {
  useEffect(() => {
    const isWebView = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return userAgent.includes('webview') || userAgent.includes('tiktok');
    };

    const timer = setTimeout(() => {
      if (isWebView()) {
        // Usa deep link para abrir o WhatsApp diretamente (Android/iOS)
        window.location.href = 'whatsapp://send?phone=5592993869080';
      } else {
        // Fallback para navegadores normais
        window.location.href = 'whatsapp://send?phone=5592993869080';
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
        Redirecionando para o WhatsApp...
      </h1>
      <p style={{ color: '#555' }}>
        Se não for redirecionado,{' '}
        <a
          href="https://wa.me/5592993869080"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          clique aqui
        </a>.
      </p>
    </div>
  );
}