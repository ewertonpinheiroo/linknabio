'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-[#f6d594]">
      <div className="flex flex-col items-center text-center">
        <div className="w-[150px] h-[150px] relative mb-4">
          <Image
            src="/perfil.jpg"
            alt="Imagem de perfil"
            fill
            className="rounded-full shadow-lg border-4 border-[#462209] object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-[#462209] mb-2 tracking-wide">
          ASTROLOGIA DE QUINTAL
        </h1>

        <p className="text-[#462209] mb-6 text-base">
          Leitura completa do Mapa Astral. Agende já!
        </p>
      </div>

      {/* Título explicativo */}
      <h2 className="text-lg text-[#462209] font-semibold mb-2 text-center">
        Como acessar o link direto para o WhatsApp
      </h2>

      {/* Player de vídeo automático */}
      <div className="w-full max-w-xs mb-6 aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-md"
          src="https://www.youtube.com/embed/10FQ9ctMS0w?si=po2BaiG3aj33kmC2"
          title="Como acessar o link do WhatsApp"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <p className="text-sm text-[#462209] mt-2 text-center">
          Clique no play para assistir ao vídeo! 📹
        </p>
      </div>

      {/* Botão único */}
      <div className="w-full max-w-xs mt-3">
        <LinkButton
          href="/abrir-whatsapp"
          label="ATENDIMENTO PELO WHATSAPP"
          subtitle="Agende sua consulta"
        />
      </div>
      <p className="text-sm text-[#462209] mt-4 text-center px-2">
        ⚠️ O TikTok às vezes bloqueia o link direto pro WhatsApp. <br />
        Mas relaxa! É rapidinho e super fácil resolver é só seguir o passo a passo no vídeo acima. 😉
      </p>
    </div>
  );
}

function LinkButton({
  href,
  label,
  subtitle,
}: {
  href: string;
  label: string;
  subtitle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#462209] text-[#f6d594] px-6 py-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#5c2e0d]"
    >
      <div className="space-y-1 leading-tight">
        <div className="text-base font-semibold">{label}</div>
        <div className="text-sm text-[#f6d594]/80">{subtitle}</div>
      </div>
    </a>
  );
}
