'use client';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

type HeroVideoProps = {
  variant?: "public" | "movement";
};

export function HeroVideo({ variant = "public" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const isMovement = variant === "movement";

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-green-400 mb-4">
            {isMovement ? "Movimento / Antes e Depois" : "Receita Certa · Bahia 2026"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            {isMovement ? "Candeias mudou. Veja a prova." : "Em Candeias, ele virou prova."}
            <span className="block text-green-400 mt-2">Na Bahia, vira receita.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            {isMovement
              ? "Esta página organiza as imagens, histórias e comparativos que mostram a transformação de Candeias. O foco é prova visual antes de promessa."
              : "12 obras entregues. Fila de espera de 47 para 7 dias. Bibliotecas, escolas e praças que voltaram a funcionar. Veja a história — e decida se você quer esse padrão na sua cidade."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#comparacao"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Ver as 12 obras
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-black px-8 py-4 rounded-full transition-all duration-300 backdrop-blur"
            >
              Fazer parte
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-video bg-black"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/videos/pitagoras-origem-poster.jpg"
            playsInline
            preload="metadata"
            controls={playing}
            onEnded={() => setPlaying(false)}
          >
            <source src="/videos/pitagoras-origem-opt.mp4" type="video/mp4" />
          </video>

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              aria-label="Reproduzir vídeo"
            >
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-9 h-9 text-white ml-1" fill="currentColor" />
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
