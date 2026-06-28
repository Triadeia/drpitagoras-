import type { Metadata } from "next";
import { SupporterPanel } from "@/components/supporter-panel";

export const metadata: Metadata = {
  title: "Apoiadores e Lideranças | Painel Dr. Pitagoras",
  description: "Cadastro e acompanhamento de lideranças, apoiadores e check-ins do movimento Receita Certa.",
};

export default function PainelApoiadoresPage() {
  return <SupporterPanel />;
}
