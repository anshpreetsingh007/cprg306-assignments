"use client";

import { useState } from "react";

type NewItemProps = {
  onAddItem: (item: { name: string; quantity: number; category: string }) => void;
};

export default function NewItem({ onAddItem }: NewItemProps) {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [category, setCategory] = useState("produce");

  const isNameValid = name.trim().length >= 2;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNameTouched(true);

    if (!isNameValid) return;

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    onAddItem(item);

    // Reset form
    setName("");
    setNameTouched(false);
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Add New Item</h2>
        <span className="text-xs text-gray-500">Week 6</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* ITEM NAME */}
        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Item Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            placeholder="e.g., Apples"
            className={`w-full rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 shadow-sm transition
              focus:outline-none focus:ring-2 focus:ring-gray-900
              ${
                !isNameValid && nameTouched
                  ? "border border-red-500 focus:ring-red-500"
                  : "border border-gray-300 focus:border-gray-900"
              }`}
          />

          {!isNameValid && nameTouched && (
            <p className="text-red-500 text-sm mt-1">
              Item name must be at least 2 characters
            </p>
          )}
        </div>

        {/* QUANTITY */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Quantity
          </label>

          <input
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                       text-gray-800 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-gray-900
                       focus:border-gray-900 transition"
          />
        </div>
      </div>

      {/* CATEGORY */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                     text-gray-800 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-gray-900
                     focus:border-gray-900 transition"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* BUTTON */}
      <button
        className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white
                   hover:bg-gray-800 active:bg-gray-900 transition"
      >
        Add Item
      </button>
    </form>
  );
}