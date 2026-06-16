"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { assetDirectory, directoryItems } from "@/lib/brandbook";

const filters = ["Todos", "Fundamentos", "Narrativa", "Sistema"];

export function BrandbookDirectory() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");
  const entries = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return [...directoryItems, ...assetDirectory].filter((item) => {
      const matchesFilter = filter === "Todos" || item.group === filter;
      const haystack = `${item.name} ${item.description} ${item.category}`.toLocaleLowerCase("pt-BR");
      return matchesFilter && (!normalized || haystack.includes(normalized));
    });
  }, [filter, query]);

  return (
    <>
      <div className="brand-directory-toolbar">
        <div className="brand-directory-search">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar página, capítulo, componente ou asset..." />
        </div>
        <div className="brand-filter-tabs">
          {filters.map((item) => (
            <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="brand-count">{entries.length} itens encontrados</p>
      <div className="brand-directory-grid">
        {entries.map((item) => (
          <Link key={item.id} href={item.href} className="brand-directory-item">
            <div><span>{item.category}</span><ArrowUpRight size={16} /></div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <footer><span>{item.group}</span><span>Ver item</span></footer>
          </Link>
        ))}
      </div>
    </>
  );
}
