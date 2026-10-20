import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceFavoriteControl } from "@/components/ExperienceFavoriteControl";
import { experiences } from "@/data/experiences";
import { categoryLabels, formatPrice } from "@/lib/experience-presentation";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return experiences.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    return { title: "Experiencia no encontrada | Wanderlust Explorer" };
  }

  return {
    title: `${experience.title} | Wanderlust Explorer`,
    description: experience.description,
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  return (
    <Suspense fallback={<div className="page-shell detail-loading">Cargando experiencia…</div>}>
      <ExperienceDetailContent params={params} />
    </Suspense>
  );
}

async function ExperienceDetailContent({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="page-shell detail-page">
      <Link className="back-link" href="/experiences">
        <span aria-hidden="true">←</span> Todas las experiencias
      </Link>

      <article className="experience-detail">
        <div className="experience-detail__image-wrap">
          <Image
            className="experience-detail__image"
            src={experience.imageUrl}
            alt={experience.title}
            fill
            sizes="(max-width: 800px) 100vw, 58vw"
            unoptimized
            fetchPriority="high"
          />
        </div>

        <div className="experience-detail__content">
          <div className="experience-detail__eyebrow-row">
            <span className="detail-category">
              {categoryLabels[experience.category]}
            </span>
            <ExperienceFavoriteControl
              experienceId={experience.id}
              title={experience.title}
            />
          </div>

          <p className="experience-detail__destination">{experience.destination}</p>
          <h1>{experience.title}</h1>
          <p className="experience-detail__description">{experience.description}</p>

          <div className="experience-detail__facts">
            <div>
              <span className="experience-detail__fact-label">Valoración</span>
              <span className="experience-detail__fact-value">
                <span className="rating-star" aria-hidden="true">★</span>
                {experience.rating.toFixed(1)} / 5
              </span>
            </div>
            <div>
              <span className="experience-detail__fact-label">Precio por persona</span>
              <span className="experience-detail__fact-value">
                {formatPrice(experience.price)}
              </span>
            </div>
            <div>
              <span className="experience-detail__fact-label">Destino</span>
              <span className="experience-detail__fact-value">
                {experience.destination}
              </span>
            </div>
          </div>

          <Link className="detail-explore-link" href="/experiences">
            Seguir explorando <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </main>
  );
}