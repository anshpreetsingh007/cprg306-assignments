import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
          Shopping List
        </h1>

        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <ItemList />
        </div>
      </div>
    </main>
  );
}
