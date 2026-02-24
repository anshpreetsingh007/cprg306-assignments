"use client";

import { useState } from "react";
import ItemList, { ItemType } from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState<ItemType[]>(itemsData as ItemType[]);

  function handleAddItem(item: Omit<ItemType, "id">) {
    const newItem: ItemType = {
      id: crypto.randomUUID(),
      ...item,
    };
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Shopping List
          </h1>
          <p className="text-sm text-gray-500">
            Add items, then sort or group them neatly.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <NewItem onAddItem={handleAddItem} />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <ItemList items={items} />
        </section>
      </div>
    </main>
  );
}