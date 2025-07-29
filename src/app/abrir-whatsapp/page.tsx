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
        // Tenta abrir diretamente o WhatsApp com Intent URL (Android)
        window.location.href = 'intent://send/+5592993869080#Intent;scheme=whatsapp;package=com.whatsapp;end';
      } else {
        // Redireciona normalmente para outros navegadores
        window.location.href = 'https://wa.me/5592993869080';
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