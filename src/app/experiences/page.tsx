import type { Metadata } from "next";
import { Suspense } from "react";
import { ExperienceExplorer } from "@/components/ExperienceExplorer";

export const metadata: Metadata = {
  title: "Explorar experiencias | Wanderlust Explorer",
  description: "Explora experiencias locales en destinos de todo el mundo.",
};

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<main className="page-shell explorer-loading">Cargando experiencias…</main>}>
      <ExperienceExplorer />
    </Suspense>
  );
}