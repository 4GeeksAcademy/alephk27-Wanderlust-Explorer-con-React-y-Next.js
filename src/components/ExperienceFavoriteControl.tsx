"use client";

import { FavoriteButton } from "@/components/FavoriteButton";
import { useFavorites } from "@/components/FavoritesProvider";

interface ExperienceFavoriteControlProps {
  experienceId: string;
  title: string;
}

export function ExperienceFavoriteControl({
  experienceId,
  title,
}: ExperienceFavoriteControlProps) {
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <FavoriteButton
      title={title}
      isFavorite={favoriteIds.includes(experienceId)}
      onToggle={() => toggleFavorite(experienceId)}
    />
  );
}