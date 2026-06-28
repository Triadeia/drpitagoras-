import type { Metadata } from 'next';
import { ObrasExperience } from '@/components/obras/obras-experience';

export const metadata: Metadata = {
  title: 'Obras | Receita Certa — Dr. Pitágoras',
  description:
    '12 obras entregues em Candeias. A receita que pode transformar a Bahia em 2026. Veja antes/depois, números reais e participe do movimento.',
  openGraph: {
    title: 'Obras | Receita Certa',
    description: '12 obras. 12 histórias. A receita que vira política pública.',
    images: ['/images/hero-pitagoras.jpg'],
  },
};

export default function ObrasLandingPage() {
  return <ObrasExperience />;
}
