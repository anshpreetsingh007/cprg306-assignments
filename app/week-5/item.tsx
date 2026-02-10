type ItemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="flex items-start justify-between gap-4 rounded-lg border bg-white p-3 shadow-sm">
      <div>
        <p className="text-base font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">
          Qty: <span className="font-medium text-gray-800">{quantity}</span>
        </p>
      </div>

      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 capitalize">
        {category}
      </span>
    </li>
  );
}
