"use client";

import { useState } from "react";
import ItemList, { ItemType } from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState<ItemType[]>(itemsData as ItemType[]);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  function handleAddItem(item: Omit<ItemType, "id">) {
    const newItem: ItemType = {
      id: crypto.randomUUID(),
      ...item,
    };
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item: ItemType) {
   
    const beforeComma = item.name.split(",")[0]?.trim() ?? "";

  
    const noEmoji = beforeComma.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDC00-\uDFFF]|[\u2011-\u26FF])/g,
      ""
    );

    const cleaned = noEmoji.replace(/\s+/g, " ").trim().toLowerCase();
    setSelectedItemName(cleaned);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Shopping List</h1>
          <p className="text-sm text-gray-500">Add items, then sort or group them neatly.</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <NewItem onAddItem={handleAddItem} />
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </section>
          </div>

          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}