"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Experience, ExperienceCategory } from "@/data/experiences";
import { categoryLabels } from "@/lib/experience-presentation";

export interface ExperienceFilters {
  search: string;
  category: ExperienceCategory | "";
  destination: string;
}

const categoryValues = new Set(Object.keys(categoryLabels));

function readFilters(params: URLSearchParams): ExperienceFilters {
  const category = params.get("category") ?? "";

  return {
    search: params.get("search") ?? "",
    category: categoryValues.has(category)
      ? (category as ExperienceCategory)
      : "",
    destination: params.get("destination") ?? "",
  };
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useExperienceFilters(allExperiences: Experience[]) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const filters = readFilters(new URLSearchParams(queryString));

  const searchPattern = filters.search.trim()
    ? new RegExp(escapeRegex(filters.search.trim()), "i")
    : null;
  const destinationQuery = filters.destination.trim().toLocaleLowerCase();

  const filteredExperiences = allExperiences.filter((experience) => {
    const matchesSearch = !searchPattern || searchPattern.test(experience.title);
    const matchesCategory =
      !filters.category || experience.category === filters.category;
    const matchesDestination =
      !destinationQuery ||
      experience.destination.toLocaleLowerCase().includes(destinationQuery);

    return matchesSearch && matchesCategory && matchesDestination;
  });

  function updateFilters(updates: Partial<ExperienceFilters>) {
    const nextFilters = { ...filters, ...updates };
    const params = new URLSearchParams(searchParams.toString());

    for (const key of ["search", "category", "destination"] as const) {
      const value = nextFilters[key];
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function clearFilters() {
    updateFilters({ search: "", category: "", destination: "" });
  }

  return {
    filters,
    filteredExperiences,
    hasActiveFilters: Boolean(
      filters.search || filters.category || filters.destination,
    ),
    updateFilters,
    clearFilters,
  };
}