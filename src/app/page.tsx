import Image from "next/image";
import Link from "next/link";

const heroImageUrl =
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <Image
          className="home-hero__image"
          src={heroImageUrl}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          unoptimized
          fetchPriority="high"
        />
        <div className="home-hero__shade" aria-hidden="true" />

        <div className="home-hero__content">
          <p className="home-eyebrow">
            <span className="home-eyebrow__dot" aria-hidden="true" />
            Lugares que se viven, no solo se visitan
          </p>
          <h1 id="home-title">
            Wanderlust
            <br />
            <span>Explorer.</span>
          </h1>
          <p className="home-hero__description">
            Experiencias locales para descubrir cada destino a través de su cultura, sus sabores y su gente.
          </p>
          <div className="home-hero__actions">
            <Link className="home-button" href="/experiences">
              Explorar experiencias
              <span className="home-button__arrow" aria-hidden="true">→</span>
            </Link>
            <span className="home-hero__count">100 experiencias · 5 formas de explorar</span>
          </div>
        </div>

        <div className="home-hero__caption">
          <span>Tu próxima historia empieza aquí</span>
          <span className="home-hero__caption-line" aria-hidden="true" />
          <span>01 / 05</span>
        </div>
      </section>

      <section className="home-categories" aria-label="Categorías de experiencias">
        <span className="home-categories__label">Explora a tu manera</span>
        <ul>
          <li>Aventura</li>
          <li>Cultura</li>
          <li>Gastronomía</li>
          <li>Bienestar</li>
          <li>Naturaleza</li>
        </ul>
      </section>
    </main>
  );
}
