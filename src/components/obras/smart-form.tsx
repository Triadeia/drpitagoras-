'use client';
import { motion } from 'framer-motion';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  tipo: z.enum(['apoiador', 'lider', 'padrinho', 'doador', 'voluntario']),
  nome: z.string().min(2, 'Nome obrigatório'),
  whatsapp: z.string().min(10, 'WhatsApp obrigatório'),
  bairro: z.string().min(2, 'Bairro obrigatório'),
  quantasPessoas: z.string().optional(),
  obra: z.string().optional(),
  faixa: z.string().optional(),
  voluntarioTurno: z.string().optional(),
  consentLgpd: z.boolean().refine((v) => v === true, 'Aceitar LGPD é obrigatório'),
});

type FormData = z.infer<typeof formSchema>;

export function SmartForm() {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { tipo: 'apoiador', consentLgpd: false },
  });

  const tipo = useWatch({ control, name: 'tipo' });

  const selectTipo = (t: FormData['tipo']) => {
    setValue('tipo', t);
  };

  const onSubmit = async (data: FormData) => {
    const messages: Record<FormData['tipo'], string> = {
      apoiador: `Oi, equipe Receita Certa! Sou ${data.nome}, de ${data.bairro}. Quero apoiar o movimento. Já vi o que Pitágoras fez em Candeias e quero somar.`,
      lider: `Oi, equipe Receita Certa! Sou ${data.nome}, de ${data.bairro}. Sou liderança e consigo reunir ${data.quantasPessoas} pessoas. Quero conversar sobre liderar a Receita Certa aqui.`,
      padrinho: `Oi, equipe! Sou ${data.nome}, de ${data.bairro}. Quero apadrinhar uma demanda: ${data.obra}. Como funciona?`,
      doador: `Oi, equipe! Sou ${data.nome}, de ${data.bairro}. Quero contribuir financeiramente. Faixa: ${data.faixa}.`,
      voluntario: `Oi, equipe! Sou ${data.nome}, de ${data.bairro}. Quero ser voluntário. Disponibilidade: ${data.voluntarioTurno}.`,
    };

    const msg = messages[data.tipo];
    const encoded = encodeURIComponent(msg);

    await fetch('/api/leader/supporters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.nome,
        phone: data.whatsapp,
        city: 'Candeias',
        neighborhood: data.bairro,
        status: data.tipo === 'lider' ? 'Lideranca capturada' : 'Novo cadastro',
        points: data.tipo === 'lider' ? 25 : 15,
        tags: ['LP Obras', data.tipo],
      }),
    }).catch(() => null);

    window.location.assign(`https://wa.me/5571997238027?text=${encoded}`);
  };

  return (
    <section id="form" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Última pergunta: como você quer fazer parte?
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="mb-8">
            <label className="block text-sm font-black text-gray-900 mb-4 uppercase">Tipo de apoio</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {(['apoiador', 'lider', 'padrinho', 'doador', 'voluntario'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => selectTipo(t)}
                  className={`px-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                    tipo === t
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-black text-gray-700 uppercase mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                {...register('nome')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              {errors.nome && <p className="text-red-600 text-xs mt-1">{errors.nome.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-black text-gray-700 uppercase mb-2">
                WhatsApp (com DDD) *
              </label>
              <input
                type="tel"
                placeholder="(71) 99999-9999"
                {...register('whatsapp')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              {errors.whatsapp && <p className="text-red-600 text-xs mt-1">{errors.whatsapp.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-gray-700 uppercase mb-2">
              Bairro ou cidade *
            </label>
            <input
              type="text"
              placeholder="Ex.: Candeias, Caroba..."
              {...register('bairro')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all mb-6"
            />
            {errors.bairro && <p className="text-red-600 text-xs mt-1">{errors.bairro.message}</p>}
          </div>

          {tipo === 'lider' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6">
              <label className="block text-xs font-black text-gray-700 uppercase mb-2">Quantas pessoas você reúne? *</label>
              <select {...register('quantasPessoas')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200">
                <option value="">Selecione...</option>
                <option value="5 a 20">5 a 20</option>
                <option value="20 a 50">20 a 50</option>
                <option value="50 a 100">50 a 100</option>
                <option value="Mais de 100">Mais de 100</option>
              </select>
            </motion.div>
          )}

          {tipo === 'padrinho' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6">
              <label className="block text-xs font-black text-gray-700 uppercase mb-2">Qual obra você quer apadrinhar? *</label>
              <textarea placeholder="Descreva a demanda do seu bairro..." {...register('obra')} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </motion.div>
          )}

          {tipo === 'doador' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6">
              <label className="block text-xs font-black text-gray-700 uppercase mb-2">Faixa de contribuição *</label>
              <select {...register('faixa')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200">
                <option value="">Selecione...</option>
                <option value="Até R$ 100">Até R$ 100</option>
                <option value="R$ 100 a R$ 500">R$ 100 a R$ 500</option>
                <option value="R$ 500 a R$ 2.000">R$ 500 a R$ 2.000</option>
                <option value="Acima de R$ 2.000">Acima de R$ 2.000</option>
              </select>
            </motion.div>
          )}

          {tipo === 'voluntario' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6">
              <label className="block text-xs font-black text-gray-700 uppercase mb-2">Qual turno você tem disponível? *</label>
              <select {...register('voluntarioTurno')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200">
                <option value="">Selecione...</option>
                <option value="Manhãs">Manhãs</option>
                <option value="Tardes">Tardes</option>
                <option value="Noites">Noites</option>
                <option value="Fins de semana">Fins de semana</option>
              </select>
            </motion.div>
          )}

          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" {...register('consentLgpd')} className="mt-1 w-5 h-5 rounded accent-blue-600" />
              <span className="text-xs text-gray-700">
                Autorizo o Movimento Receita Certa a entrar em contato via WhatsApp e tratar meus dados conforme a Política de Privacidade (LGPD Lei 13.709/2018).
              </span>
            </label>
            {errors.consentLgpd && <p className="text-red-600 text-xs mt-2">{errors.consentLgpd.message}</p>}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-lg"
          >
            CONFIRMAR NO WHATSAPP →
          </motion.button>

          <p className="text-center text-xs text-gray-500 mt-4">
            Resposta em até 24h · Equipe Receita Certa · Dados nunca serão vendidos
          </p>
        </motion.form>
      </div>
    </section>
  );
}
