import type { Metadata } from "next";
import { ObrasExperience } from "@/components/obras/obras-experience";

export const metadata: Metadata = {
  title: "Antes e Depois de Candeias | Dr. Pitagoras",
  description:
    "Comparativos visuais das obras de Candeias e chamada para participação no movimento Receita Certa.",
};

export default function AntesDepoisPage() {
  return <ObrasExperience variant="movement" />;
}
