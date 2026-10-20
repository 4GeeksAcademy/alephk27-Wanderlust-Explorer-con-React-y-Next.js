"use client";

import Link from "next/link";
import { useFavorites } from "@/components/FavoritesProvider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="page-shell profile-page">
      <header className="page-heading">
        <p className="page-eyebrow">Tu espacio de viaje</p>
        <h1>Perfil</h1>
        <p>Una pequeña pausa para planear la próxima aventura.</p>
      </header>

      <section className="profile-content" aria-label="Perfil de usuario">
        <div className="profile-identity">
          <div className="profile-avatar" aria-hidden="true">AR</div>
          <div>
            <p className="profile-identity__eyebrow">Viajera de Wanderlust</p>
            <h2>Alex Rivera</h2>
            <p>Barcelona, España</p>
          </div>
        </div>

        <div className="profile-stat">
          <span className="profile-stat__number">{favoriteIds.length}</span>
          <span className="profile-stat__label">
            {favoriteIds.length === 1 ? "experiencia guardada" : "experiencias guardadas"}
          </span>
          <Link className="text-action" href="/favorites">
            Ver favoritos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="profile-note">
          <span className="profile-note__mark" aria-hidden="true">W</span>
          <p>El mundo se siente más cerca cuando lo descubres a través de quienes lo llaman hogar.</p>
        </div>
      </section>
    </main>
  );
}