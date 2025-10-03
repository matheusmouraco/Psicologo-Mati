
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Heart, Target, MessageSquare, Search, Award, Smartphone, Building, Users, Zap, ShieldCheck, PenTool, BrainCircuit, Feather, Smile, BookOpen } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20psicologia.";

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0f716a265_CapturadeTela2025-08-05as13306AM.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/89c395304_CapturadeTela2025-08-05as13321AM.png"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ea9df8a7c_african-american-medic-meeting-with-psychotherapis-2025-02-20-02-43-49-utc.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1974&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Feather className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Acolhimento começa antes da consulta. Começa no seu site.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Seu trabalho transforma vidas. Sua presença online precisa transmitir essa mesma sensibilidade e confiança para acolher quem mais precisa de você.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Todos os dias, pessoas em busca de apoio digitam no Google:</h2>
             <div className="flex flex-wrap justify-center gap-4 text-zinc-300 text-lg my-8">
                 <span className="bg-zinc-800 rounded-full px-4 py-2">“Psicólogo perto de mim”</span>
                 <span className="bg-zinc-800 rounded-full px-4 py-2">“Terapia online”</span>
                 <span className="bg-zinc-800 rounded-full px-4 py-2">“Ansiedade tratamento”</span>
             </div>
             <p className="text-xl text-zinc-300 mt-6">A pergunta é: <span className="text-[#FF004D] font-bold">Quando encontram você, sentem que podem confiar? Seu site acolhe antes mesmo da primeira conversa?</span></p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Na Mati Studio, criamos sites para psicólogos com foco em 3 pilares:</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Award, title: "Construir autoridade com leveza" },
                        { icon: Smile, title: "Transmitir empatia e segurança" },
                        { icon: Heart, title: "Gerar agendamentos de forma sutil" },
                    ].map(pillar => (
                         <div key={pillar.title} className="flex flex-col items-center">
                            <pillar.icon className="w-12 h-12 text-[#FF004D] mb-4"/>
                            <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que entregamos para você</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <BookOpen className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Site profissional para psicólogos</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Um espaço digital pensado para acolher, informar e conectar.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Página inicial com narrativa emocional e profissional",
                               "Página \"Sobre\" com sua trajetória e abordagem",
                               "Página de especialidades (ansiedade, depressão, etc.)",
                               "Informações claras sobre atendimentos",
                               "Integração com WhatsApp e agendamento",
                               "SEO para seu nome ser encontrado",
                               "Design leve, acolhedor e funcional",
                               "Blog opcional para gerar valor e autoridade",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>

                    <Card className="bg-black border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Landing Pages para campanhas específicas</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Perfeitas para divulgar:</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Início de agenda para novos pacientes",
                               "Atendimento para nichos específicos (luto, burnout, etc.)",
                               "Terapia online com foco em outras cidades/países",
                               "Programas ou jornadas terapêuticas temáticas",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                         <p className="text-zinc-400 mt-6 italic">Com estrutura enxuta, copy emocional e foco em conversão gentil.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Diferenciais que fazem a diferença</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: PenTool, title: "Linguagem sensível e ética" },
                        { icon: ShieldCheck, title: "Alinhado ao Código de Ética" },
                        { icon: Smartphone, title: "Design minimalista e acolhedor" },
                        { icon: Search, title: "SEO para ser encontrado" },
                        { icon: BrainCircuit, title: "Painel simples para você gerenciar" },
                        { icon: Zap, title: "Performance e velocidade" },
                    ].map(feature => (
                         <Card key={feature.title} className="bg-zinc-900 border-zinc-800 text-white p-6 flex items-center gap-4 hover:bg-zinc-800 transition-colors">
                            <feature.icon className="w-8 h-8 text-[#FF004D] shrink-0"/>
                            <div>
                                <h3 className="text-lg font-bold">{feature.title}</h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Psicólogo com site profissional:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Ganha visibilidade sem depender só do Instagram",
                        "Inspira confiança desde o primeiro clique",
                        "Encanta com estética e conteúdo alinhados à sua prática",
                        "Aumenta o número de agendamentos sem perder a essência",
                    ].map(benefit => (
                         <div key={benefit} className="flex items-center gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <CheckCircle className="w-6 h-6 text-[#FF004D] shrink-0"/>
                            <p className="text-lg text-zinc-300">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Exemplos de Sites para Psicólogos</h2>
              <p className="text-zinc-400 mt-4">Sites que transmitem profissionalismo e acolhimento</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50 bg-white"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Exemplo de site ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Heart className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Um site com empatia, técnica e estratégia</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-6">Não é sobre ser "vendedor". É sobre ser encontrado por quem precisa de ajuda — e sentir que encontrou o lugar certo.</p>
                <p className="text-xl font-bold text-white mb-8">A sua escuta já faz a diferença. Agora, o seu site também vai.</p>
                <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-10">Vamos construir juntos um espaço digital que represente o seu jeito de cuidar?</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Solicitar Orçamento Acolhedor
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites com acolhimento, estratégia e alma para psicólogos e profissionais da saúde mental.</p>
        </div>
      </footer>
    </>
  );
}
