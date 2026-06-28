'use client';
import { motion } from 'framer-motion';
import { Building2, Clock, Users, BookOpen } from 'lucide-react';

const points = [
  {
    icon: Building2,
    value: '12',
    label: 'Obras entregues',
    desc: 'Bibliotecas, salas, praças e fachadas recuperadas em Candeias.',
  },
  {
    icon: Clock,
    value: '47 → 7',
    label: 'Dias de fila',
    desc: 'Tempo médio de espera por atendimento caiu mais de 80%.',
  },
  {
    icon: Users,
    value: '+30 mil',
    label: 'Vidas impactadas',
    desc: 'Famílias atendidas em saúde, educação e cultura.',
  },
  {
    icon: BookOpen,
    value: '1ª',
    label: 'Biblioteca pública',
    desc: 'A primeira biblioteca pública digna que a nova geração verá.',
  },
];

export function ProofPoints() {
  return (
    <section className="py-20 md:py-28 bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-green-600 font-black text-sm uppercase tracking-wider mb-2">
            Por que confiar
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Não são promessas. São entregas.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada número aqui tem endereço, foto e data. Pode visitar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="w-9 h-9 text-blue-600 mb-4" />
                <div className="text-4xl md:text-5xl font-black text-gray-900 leading-none mb-2">
                  {p.value}
                </div>
                <div className="font-black text-sm uppercase tracking-wide text-gray-700 mb-2">
                  {p.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
