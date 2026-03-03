"use client";

import { useEffect, useState } from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

async function fetchMealIdeas(ingredient: string): Promise<Meal[]> {
  const cleaned = ingredient.trim();
  if (!cleaned) return [];

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(cleaned)}`
  );

  if (!res.ok) throw new Error(`MealIdeas fetch failed: ${res.status}`);

  const data = (await res.json()) as { meals: Meal[] | null };
  return data.meals ?? [];
}

export default function MealIdeas({ ingredient }: { ingredient: string }) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function loadMealIdeas() {
    if (!ingredient?.trim()) {
      setMeals([]);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    try {
      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
      setStatus("idle");
    } catch (e) {
      console.error(e);
      setMeals([]);
      setStatus("error");
    }
  }

  useEffect(() => {
    loadMealIdeas();
    
  }, [ingredient]);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Meal Ideas</h2>
          <p className="text-sm text-gray-500">
            {ingredient?.trim()
              ? `Showing meals that use: ${ingredient}`
              : "Select an item to see ideas."}
          </p>
        </div>
        <span className="text-xs text-gray-500">Week 7</span>
      </div>

      {status === "loading" && <p className="text-sm text-gray-600">Loading meal ideas…</p>}
      {status === "error" && (
        <p className="text-sm text-red-600">Couldn’t load meal ideas right now. Try again.</p>
      )}

      {!ingredient?.trim() ? null : meals.length === 0 && status !== "loading" ? (
        <p className="text-sm text-gray-600">No meals found for this ingredient.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}