'use client'

import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from "next/image"



const imagens = [
  "https://i.pinimg.com/736x/7c/ca/5b/7cca5b730d137d6f7aff25e4eb8afcea.jpg",
  "https://i.pinimg.com/736x/71/79/35/717935c93814db4199c25e839d84ca73.jpg",
  "https://i.pinimg.com/736x/f0/bd/41/f0bd412605b175865497131b9a6ed855.jpg",
  "https://i.pinimg.com/736x/c2/d3/a1/c2d3a1dc7ec3206f3d76037a7cb03f2d.jpg",
  "https://i.pinimg.com/736x/df/35/f4/df35f48a1af5cf962485b9859f591a39.jpg",
  "https://i.pinimg.com/736x/12/a0/fc/12a0fc024c90fbb666acb15819b5f2ae.jpg",
  "https://i.pinimg.com/736x/ba/be/ab/babeab4fa1eba6d5629346888af1ae49.jpg",
  "https://i.pinimg.com/736x/bb/07/2f/bb072f90f19cb6c3ca2bb291b3ad0824.jpg",
  "https://i.pinimg.com/736x/d4/d7/78/d4d7789364c56851a4e634666888a4ea.jpg",
  "https://i.pinimg.com/736x/c1/1b/db/c11bdbbd3539f888d6bae26f0f35baf5.jpg",
  "https://i.pinimg.com/736x/f5/43/70/f54370d7750903595df4d2a3759a0cc5.jpg",
  "https://i.pinimg.com/736x/47/e9/1f/47e91f7ff1fa204add1597e20f5f8dba.jpg",
]

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
]

export default function PaginaCompleta() {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [servico, setServico] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('https://formspree.io/f/mldlnogk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, whatsapp, servico }),
    })

    if (res.ok) setEnviado(true)
    else alert('Erro ao enviar. Tente novamente.')
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  }
  

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let input = e.target.value.replace(/\D/g, '')
  if (input.length > 11) input = input.slice(0, 11)

  const formatado = input
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')

  setWhatsapp(formatado)
}

  return (
    <div className="min-h-screen bg-[#f6d594] py-12 px-4 flex flex-col items-center">
      {/* Formulário */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-4 w-full max-w-md text-center mb-12">
        <h2 className="text-xl font-bold text-[#462209]">
          Quer saber mais? Preencha os dados que o nosso atendimento chegará até você pelo WhatsApp.
        </h2>

        {enviado ? (
          <>
            <p className="text-green-600 font-semibold">
              Tudo certo! Agora é só aguardar o contato do astrólogo Daniel Paiva com mais informações sobre o serviço e os preços.
            </p>
            <a
              href="https://linktr.ee/astrologiadequintal"
              className="inline-block mt-4 px-6 py-3 bg-[#462209] text-white rounded-xl hover:bg-[#5b2d0f] transition"
            >
              Voltar ao LinkTree
            </a>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />

          <input
  type="tel"
  value={whatsapp}
  onChange={handlePhoneChange}
  placeholder="Seu número do WhatsApp"
  className="w-full p-3 rounded-lg border border-gray-300"
/>

            <select
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            >
              <option value="">Selecione um serviço</option>
              <option value="Mapa Astral Completo">Mapa Astral Completo</option>
              <option value="Leitura de Tarot">Leitura de Tarot</option>
              <option value="Mapa de Astrocartografia">Mapa de Astrocartografia</option>
            </select>

            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-[#462209] text-white font-semibold hover:bg-[#5b2d0f] transition"
            >
              Enviar
            </button>
          </>
        )}
      </form>

      {/* Carrossel de depoimentos */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#462209] text-center mb-6">
        Veja o que nossos clientes estão dizendo
      </h2>
      <div className="w-full max-w-6xl mx-auto mb-12 bg-[#462209] rounded-2xl p-4">
        <Slider {...settings}>
          {imagens.map((url, i) => (
            <div key={i} className="px-2 flex justify-center">
              <div className="w-full max-w-[320px] aspect-[3/4]">
                <img
                  src={url}
                  alt={`Depoimento ${i + 1}`}
                  className="w-full h-full object-contain rounded-xl "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Carrossel de avaliações */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#462209] text-center mb-6">
        Daniel Paiva é um Astrólogo 5 Estrelas
      </h2>
      <div className="w-[300px] h-[300px] relative mb-4">
        <Image
          src="/5estrelas.jpg"
          alt="Imagem de perfil"
          fill
          className="shadow-lg border-4 border-[#462209] object-cover"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto mb-12 bg-[#462209] rounded-2xl p-1">
  <Slider {...settings}>
    {avaliacoes.map((url, i) => (
      <div key={i} className="px-2 flex justify-center">
        <div className="w-full max-w-[320px] aspect-[3/4]">
          <img
            src={url}
            alt={`Depoimento ${i + 1}`}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
    ))}
  </Slider>
</div>


      {/* Cards com benefícios */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#462209] mb-6 text-center">
        Descubra como esses serviços podem transformar sua vida:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <div className="bg-white rounded-2xl shadow-md p-6 text-[#462209]">
          <h2 className="text-lg font-bold mb-2">Mapa Astral Completo</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Favorece o autoconhecimento</li>
            <li>Contribui nas finanças</li>
            <li>Orienta em questões familiares</li>
            <li>Esclarece aspectos da sexualidade</li>
            <li>Auxilia no planejamento de viagens</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-[#462209]">
          <h2 className="text-lg font-bold mb-2">Leitura de Tarot</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Clareza para tomar decisões</li>
            <li>Autoconhecimento e conexão interior</li>
            <li>Direcionamento espiritual</li>
            <li>Entendimento de questões emocionais</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-[#462209]">
          <h2 className="text-lg font-bold mb-2">Astrocartografia</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Auxilia no planejamento de viagens</li>
            <li>Ajuda na mudança de países ou cidades</li>
            <li>Mostra o que esperar de um novo lugar</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
