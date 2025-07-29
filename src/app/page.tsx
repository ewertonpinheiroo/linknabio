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

      <div className="w-full max-w-xs flex flex-col gap-4">
        <LinkButton
          href="/abrir-whatsapp"
          label="ATENDIMENTO PELO WHATSAPP"
          subtitle="Agende sua consulta"
        />
        <LinkButton
          href="https://www.instagram.com/astrologiadequintal/"
          label="INSTAGRAM"
          subtitle="Segue a gente na rede vizinha."
        />
        <LinkButton
          href="https://agriculturaceleste.com"
          label="SITE DO ASTROLOGIA DE QUINTAL"
          subtitle="Mais de 500 livros grátis"
        />
        <LinkButton
          href="https://www.youtube.com/@Astrologiadequintal"
          label="YOUTUBE"
          subtitle="Acompanhe o nosso canal"
        />
      </div>
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
