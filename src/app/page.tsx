"use client";

import { useState, useEffect } from "react";
import { Check, Sparkles, ArrowRight, Award } from "lucide-react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2A0E1A] via-[#4A1830] to-[#2A0E1A]">
      {/* Cronômetro Fixo no Topo - Mobile mais suave */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2A0E1A]/95 via-[#4A1830]/95 to-[#2A0E1A]/95 md:from-[#2A0E1A]/98 md:via-[#4A1830]/98 md:to-[#2A0E1A]/98 backdrop-blur-xl border-b border-[#8B2A52]/20 shadow-2xl shadow-[#8B2A52]/10">
        <div className="max-w-7xl mx-auto px-4 py-2.5 md:py-3 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4">
          <span className="text-rose-200/80 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
            Condição especial ativa por tempo limitado
          </span>
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#8B2A52] via-[#A0305F] to-[#8B2A52] px-4 py-1.5 md:px-6 md:py-2.5 rounded-full shadow-xl shadow-[#8B2A52]/40 border border-rose-300/20">
            <span className="text-white font-mono font-bold text-sm md:text-base lg:text-lg tracking-wider">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile mais emocional e humano */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-28 md:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Premium - Mobile com gradientes mais suaves */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradientes vinho mais suaves no mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A0E1A] via-[#4A1830] to-[#6B1B3D] opacity-90 md:opacity-100"></div>
          <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-bl from-[#8B2A52]/20 md:from-[#8B2A52]/30 via-[#A0305F]/15 md:via-[#A0305F]/20 to-transparent rounded-full blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-0 left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-tr from-[#C97B8E]/15 md:from-[#C97B8E]/20 via-[#D4A5A5]/8 md:via-[#D4A5A5]/10 to-transparent rounded-full blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-[#8B2A52]/10 md:from-[#8B2A52]/15 to-transparent rounded-full blur-[60px] md:blur-[80px]"></div>
          
          {/* Textura sutil premium */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0tMiAwdi0yaC0ydjJoMnptLTItMnYtMmgtMnYyaDJ6bTItNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYtMmgtMnYyaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10 md:opacity-20"></div>
          
          {/* Glow suave atrás de elementos */}
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#D4A5A5]/8 md:bg-[#D4A5A5]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#C97B8E]/8 md:bg-[#C97B8E]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Foto da Patrícia - Mobile: priorizada no topo */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Glow elegante e profundidade - mais suave no mobile */}
                <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-br from-[#C97B8E]/30 md:from-[#C97B8E]/40 via-[#8B2A52]/20 md:via-[#8B2A52]/30 to-[#D4A5A5]/15 md:to-[#D4A5A5]/20 rounded-[2.5rem] md:rounded-[3rem] blur-[50px] md:blur-[60px] opacity-50 md:opacity-60 group-hover:opacity-70 md:group-hover:opacity-80 transition-all duration-1000 animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-tl from-white/5 to-transparent rounded-[2rem] md:rounded-[2.5rem] blur-xl md:blur-2xl"></div>
                
                {/* Container da Imagem */}
                <div className="relative">
                  {/* Borda sutil dourada */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4A5A5]/30 md:from-[#D4A5A5]/40 via-[#C97B8E]/25 md:via-[#C97B8E]/30 to-[#8B2A52]/30 md:to-[#8B2A52]/40 rounded-[1.5rem] md:rounded-[2rem] blur-sm"></div>
                  
                  {/* Imagem Principal - Tratamento Premium */}
                  <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-2xl shadow-[#8B2A52]/40">
                    <img
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3e3ea654-600a-4056-b38f-77b2e925b2a2.jpg"
                      alt="Patrícia Rodrigues Conde - Fundadora e Estrategista do Studio Lash"
                      className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg rounded-[1.5rem] md:rounded-[2rem] transform group-hover:scale-[1.02] transition-all duration-700"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      style={{
                        filter: 'brightness(1.08) contrast(1.12) saturate(1.05)',
                      }}
                    />
                    
                    {/* Overlay sutil para integração */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1A]/30 via-transparent to-transparent rounded-[1.5rem] md:rounded-[2rem]"></div>
                  </div>
                  
                  {/* Badge Premium - Mobile mais compacto */}
                  <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-xl px-5 py-2.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-2xl shadow-[#8B2A52]/30 border border-[#D4A5A5]/30 transform group-hover:scale-105 transition-all duration-500">
                    <p className="text-[#6B1B3D] font-bold text-sm md:text-base lg:text-lg whitespace-nowrap tracking-wide">
                      Patrícia Rodrigues Conde
                    </p>
                    <p className="text-[#8B2A52]/80 text-[10px] md:text-xs lg:text-sm text-center font-medium mt-0.5">
                      Estrategista • Mentora • Fundadora
                    </p>
                  </div>
                </div>

                {/* Luz decorativa dourada */}
                <div className="absolute -top-8 md:-top-12 -right-8 md:-right-12 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-[#D4A5A5]/25 md:from-[#D4A5A5]/30 to-transparent rounded-full blur-2xl md:blur-3xl opacity-40 md:opacity-50"></div>
              </div>
            </div>

            {/* Texto Impactante - Mobile: menos texto antes do CTA */}
            <div className="order-2 lg:order-2 space-y-5 md:space-y-7 text-center lg:text-left">
              {/* Badge elegante - mobile mais compacto */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/20 shadow-lg shadow-[#8B2A52]/20">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#D4A5A5] to-[#C97B8E] rounded-full animate-pulse"></span>
                <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide">Alphaville, SP • Janeiro 2026</span>
              </div>

              {/* Título Premium - Mobile menor e mais espaçado */}
              <div className="relative">
                {/* Glow suave atrás do título */}
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-[#D4A5A5]/15 md:from-[#D4A5A5]/20 via-[#C97B8E]/15 md:via-[#C97B8E]/20 to-transparent rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50 md:opacity-60"></div>
                
                <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.25] md:leading-[1.15] tracking-tight">
                  Um plano estratégico capaz de{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A5A5] via-[#C97B8E] to-[#D4A5A5]">
                      transformar completamente
                    </span>
                    {/* Underline elegante dourado */}
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-[#D4A5A5]/50 via-[#C97B8E]/50 to-[#D4A5A5]/50 rounded-full blur-sm"></span>
                  </span>{" "}
                  o seu salão em 2026
                </h1>
              </div>

              {/* Subtítulo refinado - Mobile mais curto e direto */}
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed font-light">
                Um dia de imersão presencial para crescer com clareza, estrutura e lucro previsível.
              </p>

              {/* Cards de informação - Mobile: 2 cards lado a lado, mais compactos */}
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-2">
                <div className="group flex items-center gap-2.5 md:gap-3 bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 border border-white/10 hover:bg-white/10 hover:border-[#D4A5A5]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-[#D4A5A5]/20 to-[#C97B8E]/20 flex items-center justify-center border border-[#D4A5A5]/30">
                    <span className="text-[#D4A5A5] font-bold text-base md:text-lg">30</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs text-white/50 font-medium uppercase tracking-wider">Vagas</p>
                    <p className="font-bold text-white text-sm md:text-base">Apenas 30</p>
                  </div>
                </div>
                <div className="group flex items-center gap-2.5 md:gap-3 bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 border border-white/10 hover:bg-white/10 hover:border-[#D4A5A5]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-[#D4A5A5]/20 to-[#C97B8E]/20 flex items-center justify-center border border-[#D4A5A5]/30">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-[#D4A5A5]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs text-white/50 font-medium uppercase tracking-wider">Formato</p>
                    <p className="font-bold text-white text-sm md:text-base">Presencial</p>
                  </div>
                </div>
              </div>

              {/* CTA Principal - Mobile: mais suave, arredondado e convidativo */}
              <div className="pt-6 md:pt-8">
                <a
                  href="https://pay.kiwify.com.br/BoSxYs4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Garantir minha vaga na Imersão Estratégica 2026"
                  className="group relative inline-flex items-center justify-center gap-2.5 md:gap-3 w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 lg:px-14 lg:py-6 bg-gradient-to-r from-[#D4A5A5] via-[#C97B8E] to-[#D4A5A5] hover:from-[#C97B8E] hover:via-[#D4A5A5] hover:to-[#C97B8E] rounded-full shadow-[0_0_40px_rgba(212,165,165,0.5)] hover:shadow-[0_0_60px_rgba(212,165,165,0.7)] transition-all duration-500 overflow-hidden"
                >
                  {/* Brilho animado */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Conteúdo do botão */}
                  <span className="relative z-10 text-[#2A0E1A] font-bold text-sm md:text-base lg:text-lg flex items-center gap-2.5 md:gap-3">
                    Quero garantir minha vaga
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </a>
                
                <p className="text-[10px] md:text-xs lg:text-sm text-white/60 mt-3 md:mt-4 text-center lg:text-left font-medium">
                  Vagas extremamente limitadas • Condição especial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Studio Lash - Mobile com mais espaço em branco */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#1A0A12] via-[#2A0E1A] to-[#1A0A12] overflow-hidden">
        {/* Background com profundidade - mais suave no mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-[#8B2A52]/15 md:from-[#8B2A52]/20 to-transparent rounded-full blur-[80px] md:blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tl from-[#D4A5A5]/10 md:from-[#D4A5A5]/15 to-transparent rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Foto do Salão */}
            <div className="relative group">
              {/* Glow elegante - mais suave no mobile */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-[#D4A5A5]/25 md:from-[#D4A5A5]/30 via-[#8B2A52]/15 md:via-[#8B2A52]/20 to-transparent rounded-[2rem] md:rounded-[2.5rem] blur-[50px] md:blur-[60px] opacity-50 md:opacity-60 group-hover:opacity-70 md:group-hover:opacity-80 transition-all duration-1000"></div>
              
              {/* Container da imagem */}
              <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-2xl shadow-[#8B2A52]/40 border border-white/10">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fb4c7e8b-ba8a-487a-b695-6ed0b5bc47d2.jpg"
                  alt="Studio Lash - Salão referência em Alphaville, São Paulo"
                  className="w-full h-auto transform group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  style={{
                    filter: 'brightness(1.05) contrast(1.08)',
                  }}
                />
                
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1A]/40 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Texto de Credibilidade - Mobile mais espaçado */}
            <div className="space-y-5 md:space-y-6 text-center lg:text-left">
              {/* Badge Studio Lash */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/20 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4A5A5]" />
                <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide">Studio Lash</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Salão referência em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A5A5] via-[#C97B8E] to-[#D4A5A5]">
                  Alphaville
                </span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed font-light">
                Mais de 10 anos de história, estrutura sólida e posicionamento premium. Tudo o que será compartilhado é resultado de vivência real e processos testados.
              </p>

              {/* Stats Premium - Mobile: grid 3 colunas mais compacto */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
                {[
                  { number: "10+", label: "Anos" },
                  { number: "70+", label: "Profissionais" },
                  { number: "100%", label: "Testado" },
                ].map((stat, idx) => (
                  <div key={idx} className="group text-center">
                    <div className="relative inline-block">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/30 to-[#C97B8E]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <p className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#D4A5A5] via-[#C97B8E] to-[#D4A5A5] mb-1.5 md:mb-2">
                        {stat.number}
                      </p>
                    </div>
                    <p className="text-[10px] md:text-xs lg:text-sm text-white/60 font-semibold tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é a Imersão - Mobile mais espaçado */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#2A0E1A] via-[#4A1830] to-[#2A0E1A]">
        {/* Glow suave */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-[#D4A5A5]/8 md:from-[#D4A5A5]/10 to-transparent rounded-full blur-[100px] md:blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
            Não é um evento.
            <br />
            <span className="relative inline-block mt-2 md:mt-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A5A5] via-[#C97B8E] to-[#D4A5A5]">
                É um divisor de águas.
              </span>
              {/* Underline elegante */}
              <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-[#D4A5A5]/50 via-[#C97B8E]/50 to-[#D4A5A5]/50 rounded-full blur-sm"></span>
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
            Um dia para construir clareza, organização e um plano estratégico real para executar ao longo de todo 2026.
          </p>
        </div>
      </section>

      {/* O que você vai viver - Mobile: cards simples, menos por tela */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#2A0E1A] via-[#3A1525] to-[#2A0E1A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-16 tracking-tight">
            O que você vai viver na Imersão
          </h2>

          {/* Mobile: 1 coluna com mais espaço | Tablet: 2 colunas | Desktop: 4 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                title: "Gestão & Liderança",
                items: ["Processos", "Metas", "Vendas"],
              },
              {
                title: "Posicionamento",
                items: ["Autoridade", "Comunicação", "Digital"],
              },
              {
                title: "Marca Pessoal",
                items: ["Imagem", "Postura", "Presença"],
              },
              {
                title: "Mentalidade",
                items: ["Decisões", "Disciplina", "Foco"],
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-7 border border-white/10 hover:bg-white/10 hover:border-[#D4A5A5]/30 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/10 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-5 tracking-tight">{pillar.title}</h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 md:gap-3 text-white/70 text-sm">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-[#D4A5A5] to-[#C97B8E] flex items-center justify-center flex-shrink-0 shadow-md">
                          <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#2A0E1A]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#D4A5A5]/20 to-[#C97B8E]/20 backdrop-blur-xl rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-5 border border-[#D4A5A5]/30 shadow-xl shadow-[#8B2A52]/20 hover:shadow-2xl hover:shadow-[#D4A5A5]/30 hover:-translate-y-1 transition-all duration-300">
              <p className="text-[#D4A5A5] font-bold text-base md:text-lg">Plano Estratégico Anual 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Momento Exclusivo - Mobile mais espaçado */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#2A0E1A] via-[#4A1830] to-[#2A0E1A]">
        {/* Glow decorativo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-[#D4A5A5]/12 md:from-[#D4A5A5]/15 to-transparent rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4A5A5]/20 backdrop-blur-xl px-4 py-2 md:px-5 md:py-2.5 rounded-full mb-6 md:mb-8 border border-[#D4A5A5]/30 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4A5A5]" />
            <span className="text-[#D4A5A5] font-bold text-xs md:text-sm uppercase tracking-wider">
              Exclusivo
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 md:mb-6 tracking-tight">
            Momento reservado com Patrícia
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mb-4 md:mb-5 font-light">
            Tire dúvidas diretamente e receba direcionamento personalizado para o seu salão.
          </p>
          <p className="text-[#D4A5A5] font-bold text-base md:text-lg">
            Esse momento não será gravado.
          </p>
        </div>
      </section>

      {/* O que você leva - Mobile: lista compacta */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#2A0E1A] via-[#3A1525] to-[#2A0E1A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-16 tracking-tight">
            O que você leva para casa
          </h2>

          {/* Mobile: 1 coluna | Tablet: 2 colunas | Desktop: 3 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              "Plano Estratégico 2026",
              "Checklist de gestão",
              "Estrutura de metas",
              "Roteiro para reuniões",
              "Materiais exclusivos",
              "Apresentações completas",
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 md:gap-4 bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 hover:bg-white/10 hover:border-[#D4A5A5]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#D4A5A5] to-[#C97B8E] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8B2A52]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#2A0E1A]" />
                </div>
                <p className="text-white font-semibold text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Mobile mais suave e convidativo */}
      <section className="relative py-20 md:py-32 lg:py-40 px-4 sm:px-6 bg-gradient-to-br from-[#1A0A12] via-[#2A0E1A] to-[#1A0A12] overflow-hidden">
        {/* Elementos de luz e profundidade - mais suaves no mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-gradient-to-br from-[#D4A5A5]/15 md:from-[#D4A5A5]/20 via-[#8B2A52]/10 md:via-[#8B2A52]/15 to-transparent rounded-full blur-[120px] md:blur-[150px] animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#C97B8E]/12 md:bg-[#C97B8E]/15 rounded-full blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#D4A5A5]/12 md:bg-[#D4A5A5]/15 rounded-full blur-2xl md:blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8 md:mb-10 tracking-tight">
            Se você sente que seu salão pode ir muito além, mas ainda não tem clareza do próximo passo...
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-2 md:mb-3 font-light">
            Algumas decisões mudam um mês.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-[#D4A5A5] font-bold mb-10 md:mb-14">
            Outras mudam um ano inteiro.
          </p>

          <a
            href="https://pay.kiwify.com.br/BoSxYs4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fazer parte da Imersão Estratégica 2026 com Patrícia Rodrigues Conde"
            className="group relative inline-flex items-center justify-center gap-2.5 md:gap-3 px-10 py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 bg-gradient-to-r from-[#D4A5A5] via-[#C97B8E] to-[#D4A5A5] hover:from-[#C97B8E] hover:via-[#D4A5A5] hover:to-[#C97B8E] rounded-full shadow-[0_0_50px_rgba(212,165,165,0.5)] hover:shadow-[0_0_70px_rgba(212,165,165,0.8)] transition-all duration-500 overflow-hidden"
          >
            {/* Brilho animado */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            {/* Conteúdo */}
            <span className="relative z-10 text-[#2A0E1A] font-bold text-base md:text-lg lg:text-xl flex items-center gap-2.5 md:gap-3">
              Quero fazer parte dessa Imersão
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            </span>
          </a>
          
          <p className="text-white/70 text-xs md:text-sm mt-6 md:mt-8 font-medium">
            Apenas 30 vagas • Condição especial por tempo limitado
          </p>
        </div>
      </section>

      {/* Footer Minimalista Premium */}
      <footer className="bg-[#1A0A12] py-8 md:py-10 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-[10px] md:text-xs font-medium tracking-wide">
            © 2026 Imersão Estratégica | Patrícia Rodrigues Conde
          </p>
        </div>
      </footer>
    </main>
  );
}
