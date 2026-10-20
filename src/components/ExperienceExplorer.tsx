"use client";

import { useEffect } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useFavorites } from "@/components/FavoritesProvider";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";

export function ExperienceExplorer() {
  const {
    filters,
    filteredExperiences,
    hasActiveFilters,
    updateFilters,
    clearFilters,
  } = useExperienceFilters(experiences);
  const { favoriteIds, toggleFavorite } = useFavorites();

  useEffect(() => {
    document.title = hasActiveFilters
      ? `${filteredExperiences.length} resultados | Wanderlust Explorer`
      : "Explorar experiencias | Wanderlust Explorer";

    return () => {
      document.title = "Wanderlust Explorer | Experiencias para vivir el mundo";
    };
  }, [filteredExperiences.length, hasActiveFilters]);

  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="page-eyebrow">Encuentra tu próxima historia</p>
        <div className="page-heading__row">
          <div>
            <h1>Experiencias</h1>
            <p>Planes locales para conocer cada lugar desde dentro.</p>
          </div>
          <span className="page-heading__count">
            {filteredExperiences.length} de {experiences.length} experiencias
          </span>
        </div>
      </header>

      <section className="explorer-tools" aria-label="Buscar y filtrar experiencias">
        <SearchBar
          value={filters.search}
          onChange={(search) => updateFilters({ search })}
        />
        <FilterBar
          category={filters.category}
          destination={filters.destination}
          onCategoryChange={(category) => updateFilters({ category })}
          onDestinationChange={(destination) => updateFilters({ destination })}
        />
        {hasActiveFilters && (
          <button className="clear-filters" type="button" onClick={clearFilters}>
            Limpiar filtros
          </button>
        )}
      </section>

      {filteredExperiences.length > 0 ? (
        <section className="experience-grid" aria-label="Resultados de experiencias">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              favoriteIds={favoriteIds}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      ) : (
        <section className="empty-state explorer-empty-state" aria-live="polite">
          <span className="empty-state__icon" aria-hidden="true">⌕</span>
          <h2>No se encontraron resultados</h2>
          <p>Prueba con otro término o ajusta los filtros seleccionados.</p>
          <button className="text-action clear-filters__action" type="button" onClick={clearFilters}>
            Limpiar búsqueda y filtros <span aria-hidden="true">→</span>
          </button>
        </section>
      )}
    </main>
  );
}