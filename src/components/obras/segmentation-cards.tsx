'use client';
import { motion } from 'framer-motion';
import { Users, Megaphone, Building2, Gift, Clock } from 'lucide-react';

const segmentos = [
  { id: 'apoiador', icon: Users, titulo: 'APOIADOR', subtitulo: 'Distribua a Receita Certa', descricao: 'Você recebe material, vídeos, textos prontos para compartilhar com seus amigos e família.', ideal: 'Quem acredita e quer somar.', bgClass: 'from-green-400 to-green-600' },
  { id: 'lider', icon: Megaphone, titulo: 'LÍDER', subtitulo: 'Reúna sua comunidade', descricao: 'Para presidentes de associação, pastores, agentes de saúde, diretores de escola.', ideal: 'Quem já reúne pessoas.', bgClass: 'from-blue-400 to-blue-600' },
  { id: 'padrinho', icon: Building2, titulo: 'PADRINHO DE OBRA', subtitulo: 'Adote uma obra futura', descricao: 'Você indica uma demanda do seu bairro. Receita Certa transforma em pauta legislativa documentada.', ideal: 'Quem quer legado real.', bgClass: 'from-yellow-400 to-yellow-600' },
  { id: 'doador', icon: Gift, titulo: 'DOADOR', subtitulo: 'Financie a próxima obra', descricao: 'Doações dentro dos limites do TSE, com recibo, declaração e rastreabilidade total.', ideal: 'Quem entende que campanha honesta custa.', bgClass: 'from-purple-400 to-purple-600' },
  { id: 'voluntario', icon: Clock, titulo: 'VOLUNTÁRIO', subtitulo: 'Doe horas. Construa Bahia.', descricao: 'Panfletagem, eventos, casa a casa, redes sociais. Você escolhe o turno e o dia.', ideal: 'Quem tem mais tempo do que dinheiro.', bgClass: 'from-red-400 to-red-600' },
];

export function SegmentationCards() {
  return (
    <section className="py-20 md:py-32 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Você não precisa ser político para mudar a Bahia.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Você só precisa decidir como vai fazer parte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {segmentos.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <motion.button
                key={seg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => {
                  const form = document.getElementById('form');
                  const btn = document.querySelector(`[data-segment="${seg.id}"]`) as HTMLButtonElement | null;
                  form?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => btn?.click(), 500);
                }}
                data-segment={seg.id}
                className={`group relative overflow-hidden rounded-xl p-6 text-white text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${seg.bgClass}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />

                <div className="relative z-10">
                  <Icon className="w-10 h-10 mb-4 group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="font-black text-lg mb-1">{seg.titulo}</h3>
                  <p className="text-sm font-bold opacity-90 mb-4">{seg.subtitulo}</p>
                  <p className="text-xs leading-relaxed opacity-90 mb-6">{seg.descricao}</p>
                  <div className="text-xs font-bold opacity-75">
                    Ideal para: <span className="block mt-1">{seg.ideal}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-lg group-hover:translate-x-2 transition-transform duration-300">
                  →
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
