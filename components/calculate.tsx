import { add, multiply, subtract, divide } from "../util/test_functions";

export default function Calculate() {
  const a = 10;
  const b = 5;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>
      <p className="mb-2">
        Addition: {a} + {b} = {add(a, b)}
      </p>
      <p className="mb-2">
        Subtraction: {a} - {b} = {subtract(a, b)}
      </p>
      <p className="mb-2">
        Multiplication: {a} * {b} = {multiply(a, b)}
      </p>
      <p className="mb-2">
        Division: {a} / {b} = {divide(a, b)}
      </p>
    </div>
  );
}

export function calculateSomething() {
  const x = 20;
  const y = 4;
  const sum = add(x, y);
  const product = multiply(x, y);
  return { sum, product };
}
