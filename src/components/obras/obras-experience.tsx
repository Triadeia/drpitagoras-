import { HeroVideo } from "@/components/obras/hero-video";
import { ProofPoints } from "@/components/obras/proof-points";
import { BeforeAfterSlider } from "@/components/obras/before-after-slider";
import { SegmentationCards } from "@/components/obras/segmentation-cards";
import { SmartForm } from "@/components/obras/smart-form";

type ObrasExperienceProps = {
  variant?: "public" | "movement";
};

export function ObrasExperience({ variant = "public" }: ObrasExperienceProps) {
  return (
    <main className="bg-white">
      <HeroVideo variant={variant} />
      <ProofPoints />
      <BeforeAfterSlider />
      <SegmentationCards />
      <SmartForm />

      <footer className="bg-slate-900 text-slate-400 py-10 px-6 md:px-12 text-center text-sm">
        <p className="mb-2 font-bold text-white">Movimento Receita Certa · Bahia 2026</p>
        <p>
          Dúvidas? WhatsApp{" "}
          <a className="underline hover:text-white" href="https://wa.me/5571997238027?text=Vim%20do%20site">
            (71) 99723-8027
          </a>
        </p>
        <p className="mt-2 text-xs opacity-70">
          Dados tratados conforme LGPD (Lei 13.709/2018).
        </p>
      </footer>
    </main>
  );
}
