type ItemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li
      className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3
                 shadow-sm hover:shadow-md transition"
    >
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-500 mt-1">
          Quantity: <span className="font-medium text-gray-700">{quantity}</span>
        </p>
      </div>

      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 capitalize">
        {category}
      </span>
    </li>
  );
}