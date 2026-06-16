import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandbookDirectory } from "@/components/brandbook-directory";

export default function BrandbookDirectoryPage() {
  return (
    <main className="brandbook-page">
      <Link href="/app/marca" className="brand-back"><ArrowLeft size={16} /> Voltar ao brandbook</Link>
      <header className="brandbook-simple-header">
        <span className="brand-kicker">Biblioteca navegável</span>
        <h1>Todos os pilares, capítulos e assets do movimento.</h1>
        <p>Busque por marca, narrativa, componente, evidência ou material de operação.</p>
      </header>
      <BrandbookDirectory />
    </main>
  );
}
