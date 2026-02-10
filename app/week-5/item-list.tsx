"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

type ItemType = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

type SortMode = "name" | "category" | "grouped";

export default function ItemList() {
  const [sortBy, setSortBy] = useState<SortMode>("name");
  const items: ItemType[] = [...(itemsData as ItemType[])];

  const buttonClass = (mode: SortMode) =>
    `rounded-lg px-3 py-2 text-sm font-semibold border transition
     ${sortBy === mode ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-900 hover:bg-gray-50"}`;

  // GROUPED VIEW
  if (sortBy === "grouped") {
    const grouped = items.reduce<Record<string, ItemType[]>>((acc, item) => {
      const cat = item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});

    const categories = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

    categories.forEach((cat) => {
      grouped[cat].sort((a, b) => a.name.localeCompare(b.name));
    });

    return (
      <section className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setSortBy("name")} className={buttonClass("name")}>
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={buttonClass("category")}
          >
            Sort by Category
          </button>
          <button
            onClick={() => setSortBy("grouped")}
            className={buttonClass("grouped")}
          >
            Group by Category
          </button>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat} className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 capitalize">{cat}</h2>
                <span className="text-xs text-gray-500">
                  {grouped[cat].length} item{grouped[cat].length !== 1 ? "s" : ""}
                </span>
              </div>

              <ul className="space-y-3">
                {grouped[cat].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // NORMAL SORT VIEW
  items.sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.category.localeCompare(b.category);
  });

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setSortBy("name")} className={buttonClass("name")}>
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={buttonClass("category")}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={buttonClass("grouped")}
        >
          Group by Category
        </button>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}
