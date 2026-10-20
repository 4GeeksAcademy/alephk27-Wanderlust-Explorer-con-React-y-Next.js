# Qué debes hacer

## Setup y dataset

- Inicializa el proyecto desde cero con `create-next-app` (TypeScript + Tailwind + App Router).
- Usa un asistente de código con IA para generar el array de 100 experiencias y guárdalo como `src/data/experiences.ts`.
- Define una interfaz `Experience` en TypeScript con la forma de los datos y úsala en todo el proyecto.
- Añade una sección `## Design References` en tu `README.md` con enlaces o capturas de 2-3 UIs reales que hayan inspirado tu diseño.

---

## Páginas y enrutamiento

- Crea la Home (`/`) con una sección hero y un botón que navega a `/experiences`.
- Crea el Explorador (`/experiences`) con las 100 tarjetas de experiencias en una cuadrícula.
- Crea la página de Detalle (`/experiences/[id]`) que lee el ID desde la URL y muestra el contenido completo de esa experiencia.
- Crea la página de Favoritos (`/favorites`) que muestra solo las experiencias marcadas como favoritas.
- Crea la página de Perfil (`/profile`) con un perfil de usuario simulado y el contador de favoritos guardados.

---

## Búsqueda y filtros

- Añade una barra de búsqueda en el Explorador que filtre experiencias por título.
- Usa una regex case-insensitive para comparar el término con el título de cada experiencia (ej. `new RegExp(term, 'i').test(experience.title)`).
- Añade un filtro de categoría (dropdown o grupo de botones) con las cinco categorías disponibles.
- Añade un filtro de destino (dropdown o búsqueda) que filtre por ciudad o país de destino.
- Los filtros activos y el término de búsqueda deben almacenarse como query parameters en la URL usando `useSearchParams` y `usePathname` de Next.js.
- Al cargar la página con query params existentes en la URL, los inputs de búsqueda y filtros deben prerrellenarse con esos valores.

---

## Favoritos

- Añade un icono de corazón (toggle) a cada tarjeta de experiencia.
- Guarda la lista de IDs favoritos en un `useState` a nivel compartido y pásala hacia abajo como props.
- El icono de corazón debe reflejar visualmente si la experiencia está en favoritos o no.

---

## Componentes y hooks

- Crea como mínimo los componentes:
  - `ExperienceCard`
  - `SearchBar`
  - `FilterBar`
  - `Navbar`
- Usa `useEffect` en al menos un componente (ej. para sincronizar resultados filtrados cuando cambien los query params, o para actualizar el título del documento en la página de detalle).
- Crea al menos un custom hook (ej. `useExperiences` o `useFilters`) que encapsule la lógica de filtrado.

---

## UI y calidad

- La app debe ser responsiva (móvil + escritorio).
- El explorador debe mostrar un mensaje "No se encontraron resultados" cuando los filtros no devuelvan ningún resultado.
- La Navbar debe estar presente en todas las páginas y mostrar estilos de enlace activo usando `usePathname`.

> ⚠️ IMPORTANTE: No uses ninguna librería externa de gestión de estado (Redux, Zustand, etc.). Todo el estado debe vivir en el `useState` nativo de React y pasarse mediante props o custom hooks.

---

## Qué vamos a evaluar

- La app tiene al menos 5 páginas distintas con navegación del lado del cliente (sin recargas completas de página entre rutas).
- La búsqueda filtra resultados por título usando una coincidencia con regex.
- Los filtros de categoría y destino funcionan de forma independiente y se combinan correctamente con la búsqueda.
- Los filtros activos y el término de búsqueda se reflejan en la URL como query params.
- Al cargar la página con query params existentes, los inputs están prerrellenados y los resultados ya están filtrados.
- `useEffect` se usa correctamente con arrays de dependencias adecuados (sin bucles infinitos ni dependencias faltantes).
- `useState` se usa para gestionar favoritos y se pasa correctamente como props.
- Existe al menos un custom hook que encapsula lógica con significado.
- Los componentes están divididos de forma lógica; ningún fichero contiene toda la app.
- Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- La app es responsiva y visualmente coherente entre páginas.
- Las referencias de diseño están documentadas en el README.