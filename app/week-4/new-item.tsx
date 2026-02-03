"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);

  const isNameValid = name.trim().length >= 2;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isNameValid) {
      alert("Please enter a valid name (at least 2 characters)");
      return;
    }

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Item Added!\nName: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`
    );

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add New Item
        </h2>

        {/* Item Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
              !isNameValid && nameTouched
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter item name"
          />
          {!isNameValid && nameTouched && (
            <p className="text-red-500 text-sm mt-1">
              Item name must be at least 2 characters
            </p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            min={0}
            max={99}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(0, Number(e.target.value) || 0))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition bg-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen_foods">Frozen Foods</option>
            <option value="canned_goods">Canned Goods</option>
            <option value="dry_goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isNameValid}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
