import type { ExperienceCategory } from "@/data/experiences";
import { categoryLabels } from "@/lib/experience-presentation";

interface FilterBarProps {
  category: ExperienceCategory | "";
  destination: string;
  onCategoryChange: (category: ExperienceCategory | "") => void;
  onDestinationChange: (destination: string) => void;
}

const categories = Object.entries(categoryLabels) as [ExperienceCategory, string][];

export function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <label className="filter-control" htmlFor="experience-category">
        <span className="filter-label">Categoría</span>
        <select
          id="experience-category"
          name="category"
          value={category}
          onChange={(event) =>
            onCategoryChange(event.target.value as ExperienceCategory | "")
          }
        >
          <option value="">Todas las categorías</option>
          {categories.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </label>

      <label className="filter-control" htmlFor="experience-destination">
        <span className="filter-label">Destino</span>
        <input
          autoComplete="off"
          id="experience-destination"
          name="destination"
          placeholder="Ciudad o país"
          type="search"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
        />
      </label>
    </div>
  );
}