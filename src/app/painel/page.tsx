import type { Metadata } from "next";
import { CampaignDashboard } from "@/components/campaign-dashboard";

export const metadata: Metadata = {
  title: "Painel de Gestão Política | Dr. Pitagoras",
  description: "Comando estratégico do movimento Receita Certa: gestão política, liderança, território, provas e operação.",
};

export default function PainelPage() {
  return <CampaignDashboard />;
}
