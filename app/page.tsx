import Image from "next/image";
import Header from "../components/header";
import Calculate, { calculateSomething } from "@/components/calculate";

export default function Home() {
  const results = calculateSomething();
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 font-sans dark:bg-black w-full">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start px-16 bg-white dark:bg-black sm:items-start">
        <Header />
        <div className="py-12">
          <Image
            className="dark:invert rounded-2xl shadow-lg border border-red-500"
            src="/teddy_bear.jpg"
            alt="Next.js logo"
            width={200}
            height={200}
            priority
          />
          <Calculate />
          <div>{results.sum}</div>
        </div>
      </main>
    </div>
  );
}
