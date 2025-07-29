'use client';
import { useEffect } from 'react';

export default function AbrirWhatsapp() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simula um clique no link para abrir em uma nova aba
      const link = document.getElementById('whatsapp-link') as HTMLAnchorElement;
      if (link) {
        link.click();
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
          id="whatsapp-link"
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