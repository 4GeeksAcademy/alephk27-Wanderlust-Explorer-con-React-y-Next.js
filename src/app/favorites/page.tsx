"use client";

import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useFavorites } from "@/components/FavoritesProvider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="page-eyebrow">Tu colección personal</p>
        <div className="page-heading__row">
          <div>
            <h1>Favoritos</h1>
            <p>Guarda aquí las experiencias que no quieres perderte.</p>
          </div>
          <span className="page-heading__count">
            {favoriteExperiences.length} guardadas
          </span>
        </div>
      </header>

      {favoriteExperiences.length > 0 ? (
        <section className="experience-grid" aria-label="Experiencias favoritas">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              favoriteIds={favoriteIds}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <span className="empty-state__icon" aria-hidden="true">♡</span>
          <h2>Aún no tienes favoritos</h2>
          <p>Guarda experiencias con el corazón y las encontrarás aquí.</p>
          <Link className="text-action" href="/experiences">
            Explorar experiencias <span aria-hidden="true">→</span>
          </Link>
        </section>
      )}
    </main>
  );
}