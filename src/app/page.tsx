'use client';
import { useState, useEffect } from 'react';
import { Play, MessageCircle, Copy, Star, CheckCircle } from 'lucide-react';

const imagens = [
  "https://i.pinimg.com/736x/7c/ca/5b/7cca5b730d137d6f7aff25e4eb8afcea.jpg",
  "https://i.pinimg.com/736x/71/79/35/717935c93814db4199c25e839d84ca73.jpg",
  "https://i.pinimg.com/736x/f0/bd/41/f0bd412605b175865497131b9a6ed855.jpg",
  'https://i.pinimg.com/736x/c2/d3/a1/c2d3a1dc7ec3206f3d76037a7cb03f2d.jpg',
  'https://i.pinimg.com/736x/df/35/f4/df35f48a1af5cf962485b9859f591a39.jpg',
  'https://i.pinimg.com/736x/12/a0/fc/12a0fc024c90fbb666acb15819b5f2ae.jpg',
  'https://i.pinimg.com/736x/ba/be/ab/babeab4fa1eba6d5629346888af1ae49.jpg',
  'https://i.pinimg.com/736x/bb/07/2f/bb072f90f19cb6c3ca2bb291b3ad0824.jpg',
  'https://i.pinimg.com/736x/d4/d7/78/d4d7789364c56851a4e634666888a4ea.jpg',
  'https://i.pinimg.com/736x/c1/1b/db/c11bdbbd3539f888d6bae26f0f35baf5.jpg',
  'https://i.pinimg.com/736x/f5/43/70/f54370d7750903595df4d2a3759a0cc5.jpg',
  'https://i.pinimg.com/736x/47/e9/1f/47e91f7ff1fa204add1597e20f5f8dba.jpg',
];

const avaliacoes = [
  "https://i.pinimg.com/736x/bb/f4/20/bbf4206852cf042462902b1e96cabf61.jpg",
  "https://i.pinimg.com/736x/b3/c6/e2/b3c6e22b18da1577ddc8df693bd6986e.jpg",
  "https://i.pinimg.com/736x/86/20/17/862017dfe7149a22eef872aef599f0d6.jpg",
  "https://i.pinimg.com/736x/82/37/84/8237848f2995c2f5cfb60e26748d22a0.jpg",
  "https://i.pinimg.com/736x/eb/9b/60/eb9b602cf4d8fb22e17ad1e9905452c9.jpg",
  "https://i.pinimg.com/736x/78/ba/17/78ba1772d14297bbddee53d30e57727c.jpg",
  "https://i.pinimg.com/736x/2b/48/64/2b4864ca450568a7db080751018158a6.jpg",
  "https://i.pinimg.com/736x/d9/36/d8/d936d80d4560c97634fff2ffcc9e888b.jpg",
  "https://i.pinimg.com/736x/4b/59/36/4b5936b05867d5f5a6b745da248e895d.jpg"
];

export default function Home() {
  const [currentDepoimentoIndex, setCurrentDepoimentoIndex] = useState(0);
  const [currentAvaliacaoIndex, setCurrentAvaliacaoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Ativar animação e scroll automático após componente montar
  useEffect(() => {
    // Primeiro ativa a animação com delay mais suave
    const animationTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 600); // Delay maior para entrada mais suave

    // Depois faz o scroll após garantir que tudo foi renderizado
    const scrollTimer = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const botoesElement = document.getElementById('resumo');
          if (botoesElement) {
            botoesElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'center'
            });
          }
        });
      });
    }, 2000); // Mais tempo para a animação mais longa

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  const nextDepoimento = () => {
    setCurrentDepoimentoIndex((prev) => (prev + 1) % imagens.length);
  };

  const prevDepoimento = () => {
    setCurrentDepoimentoIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const nextAvaliacao = () => {
    setCurrentAvaliacaoIndex((prev) => (prev + 1) % avaliacoes.length);
  };

  const prevAvaliacao = () => {
    setCurrentAvaliacaoIndex((prev) => (prev - 1 + avaliacoes.length) % avaliacoes.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-[#f6d594]">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-[120px] h-[120px] relative mb-4">
          <img
            src="/perfil.jpg"
            alt="Astrologia de Quintal"
            className="w-full h-full rounded-full shadow-lg border-4 border-[#462209] object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#462209] mb-2 tracking-wide">
          ASTROLOGIA DE QUINTAL
        </h1>

        <p className="text-[#462209] mb-4 text-lg">
          Daniel Paiva é um Astrólogo 5 Estrelas.
        </p>

        {/* Botões de navegação */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => scrollToSection('depoimentos')}
            className="bg-[#462209] text-[#f6d594] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#5c2e0d] transition-colors"
          >
            📝 Ver Depoimentos
          </button>
          <button
            onClick={() => scrollToSection('avaliacoes')}
            className="bg-[#462209] text-[#f6d594] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#5c2e0d] transition-colors"
          >
            ⭐ Ver Avaliações
          </button>
        </div>
            
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-[#462209] ml-2 font-semibold">5,0 (328 avaliações)</span>
        </div>
      </div>

      {/* Instrução Principal */}
      <div className="w-full max-w-2xl mb-6 bg-[#462209] text-[#f6d594] rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-3">
         Para acessar link direto para o WhatsApp É só seguir 2 passos:
        </h2>
        <div className="text-lg space-y-2">
          <p><strong>1️⃣ Assista o tutorial abaixo (13 segundos)</strong></p>
          <p><strong>2️⃣ Clique no botão após abrir no navegador externo</strong></p>
        </div>
      </div>

      {/* Vídeo Tutorial - DESTAQUE PRINCIPAL */}
      <div className="w-full max-w-lg mb-6">
        <div className="bg-yellow-200 rounded-2xl p-4 border-4 border-yellow-400">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-[#462209] flex items-center justify-center gap-2">
              <Play className="w-6 h-6 text-red-600" />
              📺 ASSISTA PRIMEIRO - SUPER RÁPIDO!
            </h3>
            <p className="text-[#462209] font-medium">⏱️ Apenas 13 segundos</p>
          </div>
          
          <div className="aspect-video mb-3">
            <iframe
              className="w-full h-full rounded-xl shadow-md border-2 border-[#462209]"
              src="https://www.youtube.com/embed/VdYrZsxc8Kw?si=2SHtG2e6t9UvXXHS"
              title="Como acessar o link do WhatsApp"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          
          <div 
          id="meio"
          className="text-center">
            <p className="text-[#462209] font-bold">
              👆 CLIQUE NO PLAY E VEJA COMO É FÁCIL! 👆
            </p>
          </div>
        </div>
      </div>

      {/* Explicação Simples */}
      <div
      id="resumo"
      className="w-full max-w-lg mb-6 bg-white/30 rounded-xl p-4">
        <p className="text-[#462209] text-center font-medium">
          💡 <strong>Resumo:</strong> Após a página abrir no navegador externo
           clique no botão abaixo. Vai direto pro WhatsApp! 🚀
        </p>
      </div>

      {/* Botões de Ação - COM ANIMAÇÃO SUAVIZADA E ID PARA SCROLL */}
      <div 
        id="botoes-acao"
        className={`w-full max-w-xs space-y-3 mb-8 transition-all duration-1000 ease-out ${
          isLoaded 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-4 opacity-0'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <LinkButton
          href="https://wa.me/5592993869080?text=Ol%C3%A1!%20Vim%20pelo%20TikTok%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os."
          label="ATENDIMENTO WHATSAPP"
          subtitle="Clique aqui após abrir no navegador"
          icon={<MessageCircle className="w-5 h-5" />}
          primary={true}
        />
        
        <CopyLinkButton
          link="https://wa.me/5592993869080?text=Ol%C3%A1!%20Vim%20pelo%20TikTok%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os."
          label="OU COPIAR LINK"
          subtitle="Para colar no navegador"
        />
        
        <CopyNumberButton
          number="92993869080"
          label="COPIAR (92) 99386-9080"
          subtitle="Copiar o contato"
        />
      </div>

      {/* Aviso Tranquilizador */}
      <div className="w-full max-w-lg mb-8 bg-green-100 rounded-xl p-4 border-2 border-green-300">
        <p className="text-green-800 text-center font-medium">
          ✅ <strong>Relaxa!</strong> É normal o TikTok bloquear links externos. 
          <br />Seguindo o vídeo, você consegue em segundos! 😊
        </p>
      </div>

      {/* Depoimentos */}
      <div id="depoimentos" className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-bold text-[#462209] text-center mb-6">
          ⭐ Veja o que nossos clientes estão dizendo
        </h2>
        
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <div className="relative">
            <img
              src={imagens[currentDepoimentoIndex]}
              alt={`Depoimento ${currentDepoimentoIndex + 1}`}
              className="w-full max-w-sm mx-auto h-auto object-contain rounded-xl shadow-md"
            />
            
            <button
              onClick={prevDepoimento}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#462209]/80 text-[#f6d594] p-2 rounded-full hover:bg-[#462209] text-xl"
            >
              ←
            </button>
            
            <button
              onClick={nextDepoimento}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#462209]/80 text-[#f6d594] p-2 rounded-full hover:bg-[#462209] text-xl"
            >
              →
            </button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {imagens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDepoimentoIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentDepoimentoIndex ? 'bg-[#462209]' : 'bg-[#462209]/30'
                }`}
              />
            ))}
          </div>
          
          <p className="text-center text-[#462209] mt-3 font-medium">
            {currentDepoimentoIndex + 1} de {imagens.length} depoimentos
          </p>
        </div>
      </div>

      {/* Avaliações */}
      <div id="avaliacoes" className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-bold text-[#462209] text-center mb-6">
           Daniel Paiva é um Astrólogo 5 Estrelas ⭐ ⭐ ⭐ ⭐ ⭐
        </h2>
        
        <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
          <div className="relative">
            <img
              src={avaliacoes[currentAvaliacaoIndex]}
              alt={`Avaliação ${currentAvaliacaoIndex + 1}`}
              className="w-full max-w-sm mx-auto h-auto object-contain rounded-xl shadow-md"
            />
            
            <button
              onClick={prevAvaliacao}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#462209]/80 text-[#f6d594] p-2 rounded-full hover:bg-[#462209] text-xl"
            >
              ←
            </button>
            
            <button
              onClick={nextAvaliacao}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#462209]/80 text-[#f6d594] p-2 rounded-full hover:bg-[#462209] text-xl"
            >
              →
            </button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {avaliacoes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAvaliacaoIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentAvaliacaoIndex ? 'bg-[#462209]' : 'bg-[#462209]/30'
                }`}
              />
            ))}
          </div>
          
          <p className="text-center text-[#462209] mt-3 font-medium">
            {currentAvaliacaoIndex + 1} de {avaliacoes.length} avaliações
          </p>
        </div>
      </div>

      {/* Call to Action Final */}
      <div className="w-full max-w-lg text-center bg-[#462209] text-[#f6d594] rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">Seu mapa astral é o primeiro passo para entender quem você é e onde pode chegar.</h3>
        <p className="mb-3">Sua consulta personalizada te espera! </p>
        <p className="text-sm opacity-90">Resposta garantida em até 30 minutos</p>
      </div>
    </div>
  );
}

function LinkButton({
  href,
  label,
  subtitle,
  icon,
  primary = false
}: {
  href: string;
  label: string;
  subtitle: string;
  icon?: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block px-6 py-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-200 ${
        primary 
          ? 'bg-[#462209] text-[#f6d594] hover:bg-[#5c2e0d] border-2 border-[#462209]' 
          : 'bg-white/40 text-[#462209] hover:bg-white/50 border-2 border-[#462209]'
      }`}
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        {icon}
        <div className="text-base font-bold">{label}</div>
      </div>
      <div className={`text-sm font-medium ${primary ? 'text-[#f6d594]/90' : 'text-[#462209]/80'}`}>
        {subtitle}
      </div>
    </a>
  );
}

function CopyLinkButton({
  link,
  label,
  subtitle
}: {
  link: string;
  label: string;
  subtitle: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-700 border-2 border-blue-600"
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <Copy className="w-4 h-4" />
        <div className="text-base font-bold">
          {copied ? '✅ COPIADO!' : label}
        </div>
      </div>
      <div className="text-sm text-white/90 font-medium">
        {copied ? 'Agora cole no navegador' : subtitle}
      </div>
    </button>
  );
}

function CopyNumberButton({
  number,
  label,
  subtitle
}: {
  number: string;
  label: string;
  subtitle: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="w-full bg-green-600 text-white px-6 py-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-green-700 border-2 border-green-600"
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <Copy className="w-4 h-4" />
        <div className="text-base font-bold">
          {copied ? '✅ NÚMERO COPIADO!' : label}
        </div>
      </div>
      <div className="text-sm text-white/90 font-medium">
        {copied ? `${number} foi copiado` : subtitle}
      </div>
    </button>
  );
}