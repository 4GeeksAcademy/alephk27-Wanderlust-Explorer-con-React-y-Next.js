import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { FavoriteButton } from "@/components/FavoriteButton";
import { categoryLabels, formatPrice } from "@/lib/experience-presentation";

interface ExperienceCardProps {
  experience: Experience;
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}

export function ExperienceCard({
  experience,
  favoriteIds,
  toggleFavorite,
}: ExperienceCardProps) {
  const isFavorite = favoriteIds.includes(experience.id);

  return (
    <article className="experience-card">
      <div className="experience-card__media">
        <Link
          className="experience-card__image-link"
          href={`/experiences/${experience.id}`}
          aria-label={`Ver ${experience.title}`}
        >
          <Image
            className="experience-card__image"
            src={experience.imageUrl}
            alt={experience.title}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
            unoptimized
          />
        </Link>
        <span className="experience-card__category">
          {categoryLabels[experience.category]}
        </span>
        <FavoriteButton
          className="experience-card__favorite"
          title={experience.title}
          isFavorite={isFavorite}
          onToggle={() => toggleFavorite(experience.id)}
        />
      </div>

      <div className="experience-card__body">
        <p className="experience-card__destination">{experience.destination}</p>
        <h2 className="experience-card__title">
          <Link href={`/experiences/${experience.id}`}>{experience.title}</Link>
        </h2>
        <div className="experience-card__meta">
          <span className="experience-card__rating">
            <span aria-hidden="true">★</span> {experience.rating.toFixed(1)}
          </span>
          <span>Desde {formatPrice(experience.price)}</span>
        </div>
      </div>
    </article>
  );
}