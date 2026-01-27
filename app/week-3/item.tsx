interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="border rounded-lg p-4 bg-slate-800 text-white">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-slate-300">
        Quantity: {quantity}
      </p>
      <p className="text-sm text-slate-400">
        Category: {category}
      </p>
    </li>
  );
}
