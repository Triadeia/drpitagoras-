'use client';
import { motion } from 'framer-motion';

const obras = [
  { id: 1, driveId: '1_b_7Ic4lPbyQWA1c3-NL45vFi2NPYVVe', title: 'Biblioteca Pública', desc: 'A primeira biblioteca pública digna que essa criança verá na vida.' },
  { id: 2, driveId: '1kfWKgsYbPOlEQ_Asf9NxAveymKeLHgFe', title: 'Sala Renovada', desc: 'A sala onde a Bahia volta a alfabetizar na idade certa.' },
  { id: 3, driveId: '1lRNTk6GG8pfYJZLWYgNq7vy88E8bLu8d', title: 'Espaço de Leitura', desc: 'Onde o filho do pedreiro lê pela primeira vez um livro que é dele.' },
  { id: 4, driveId: '1XEq6f2zJ4jX_ySE42XD7mA4NE-JB_VFk', title: 'Fachada Recuperada', desc: 'A cidade que reconheceu seu próprio rosto depois de 30 anos.' },
  { id: 5, driveId: '105BYboTYcQuzvti3rIi42u3wJeJALFTK', title: 'Ambiente Reformado', desc: 'O lugar onde a professora não tem mais vergonha de chamar os pais.' },
  { id: 6, driveId: '1eexKiZ3bJfw1VylMQqEwbml_yg_kWT8Z', title: 'Área Interna', desc: 'Onde a fila de espera diminuiu de 47 dias para 7.' },
  { id: 7, driveId: '1rrSUXWEikZC1AZNEJ7x5RfJ8s8YQ6vQD', title: 'Acervo e Mobiliário', desc: 'Os livros que esperaram 20 anos por uma estante.' },
  { id: 8, driveId: '1SnqWVR7Sr8emPSNkoP31lUjg1KhA-yTE', title: 'Banheiros e Estrutura', desc: 'A coisa básica que vira política pública quando ninguém faz.' },
  { id: 9, driveId: '1A7Eck0x-HLGRgQc4tujdmnx_tveQg4G3', title: 'Espaço Infantil', desc: 'Onde a criança aprende que o município também é dela.' },
  { id: 10, driveId: '1HEIVJXjNFHzGnGqo92W34yRraohfynMH', title: 'Auditório', desc: 'O lugar onde a comunidade decide o que ela mesma precisa.' },
  { id: 11, driveId: '1vAnJ1uPdA07ui-BvMPushHAonTuIirT1', title: 'Área Externa', desc: 'Onde a praça parou de ser passagem e virou ponto de encontro.' },
  { id: 12, driveId: '1AWm0-oCruq35QYmkeNx4hxmod6cOyP3A', title: 'Sala de Estudos', desc: 'O silêncio que custa caro — e que finalmente a cidade pôde pagar.' },
];

export function BeforeAfterSlider() {
  return (
    <section id="comparacao" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-green-600 font-black text-sm uppercase tracking-wider mb-2">Galeria visual</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            12 obras. 12 histórias.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Toda foto tem um nome do outro lado. Não acredite em mim — veja você mesmo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {obras.map((obra, idx) => (
            <motion.div
              key={obra.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 6) * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '-50px' }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://drive.google.com/thumbnail?id=${obra.driveId}&sz=w800`}
                  alt={obra.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="font-black text-lg text-gray-900 mb-2">{obra.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{obra.desc}</p>

                <div className="flex gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">ANTES/DEPOIS</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">VERIFICADO</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-12 rounded-2xl text-center"
        >
          <p className="text-xl md:text-2xl font-black mb-4">
            Isso aconteceu em Candeias. Por que não pode acontecer na sua cidade?
          </p>
          <a href="#form" className="inline-block bg-green-500 hover:bg-green-600 text-white font-black px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Levar a Receita Certa pro meu bairro →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
