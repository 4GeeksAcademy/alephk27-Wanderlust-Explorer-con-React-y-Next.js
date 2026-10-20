interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-control" htmlFor="experience-search">
      <span className="filter-label">Buscar experiencia</span>
      <span className="search-control__field">
        <svg
          aria-hidden="true"
          className="search-control__icon"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
          <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
        <input
          autoComplete="off"
          id="experience-search"
          name="search"
          placeholder="Ej. kayak, cocina, yoga"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </span>
    </label>
  );
}