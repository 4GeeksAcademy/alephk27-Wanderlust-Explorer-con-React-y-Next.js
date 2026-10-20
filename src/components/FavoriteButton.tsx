"use client";

interface FavoriteButtonProps {
  title: string;
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
}

export function FavoriteButton({
  title,
  isFavorite,
  onToggle,
  className = "",
}: FavoriteButtonProps) {
  return (
    <button
      className={`favorite-button${isFavorite ? " favorite-button--active" : ""} ${className}`.trim()}
      type="button"
      aria-label={isFavorite ? `Quitar ${title} de favoritos` : `Guardar ${title} en favoritos`}
      aria-pressed={isFavorite}
      onClick={onToggle}
    >
      <span aria-hidden="true">♥</span>
    </button>
  );
}