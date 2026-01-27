export default function DetailsPage() {
  const details = [
    { id: 1, info: "Detail 1" },
    { id: 2, info: "Detail 2" },
    { id: 3, info: "Detail 3" },
  ];
  return (
    <div className="w-full min-h-screen bg-zinc-50 p-10 ">
      <h1 className="text-gray-600 font-semibold text-3xl">
        Welcome to the Details page
      </h1>
      <div>
        {details.map((detail) => (
          <div key={detail.id}>{detail.info}</div>
        ))}
      </div>
    </div>
  );
}
