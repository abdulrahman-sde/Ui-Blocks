import Link from "next/link";
import { registry } from "@/registry";

export default function Home() {
  const entries = Object.values(registry);

  return (
    <div className=" py-16 bg-neutral-50 min-h-screen px-20">
      <h1 className="text-3xl text-black font-bold">UI Blocks</h1>
      <p className="mt-2 text-gray-500">A collection of UI components</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <Link
            key={entry.id}
            href={`/${entry.id}`}
            className="block rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="font-semibold text-black/70">{entry.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
