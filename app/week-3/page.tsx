import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}