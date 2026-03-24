"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserAuth } from "../utils/auth-context";
import ItemList, { ItemType } from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { addItem, getItems } from "../_services/shopping-list-service";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState<ItemType[]>([]);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  async function loadItems() {
    if (!user) return;

    try {
      const userItems = await getItems(user.uid);
      setItems(userItems as ItemType[]);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function handleAddItem(item: Omit<ItemType, "id">) {
    if (!user) return;

    try {
      const id = await addItem(user.uid, item);
      const newItem: ItemType = {
        id,
        ...item,
      };
      setItems((prev) => [...prev, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm border border-gray-200 text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
          <p className="text-gray-600">
            You must be logged in to view the shopping list.
          </p>
          <Link href="/week-10" className="text-blue-600 underline">
            Go back to login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Shopping List
              </h1>
              <p className="text-sm text-gray-500">
                Add items, then sort or group them neatly.
              </p>
              <p className="text-sm text-gray-600">
                Signed in as {user.displayName} ({user.email})
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
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