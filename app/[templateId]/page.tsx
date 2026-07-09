import { notFound } from "next/navigation";
import { registry } from "@/registry";
import Link from "next/link";

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = await params;
  const entry = registry[templateId];

  if (!entry) notFound();

  const Component = entry.component;

  return (
    <div>
      {/* <div className="flex items-center gap-2 border-b px-4 py-3 text-sm">
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <span className="text-gray-300">/</span>
        <span>{entry.title}</span>
      </div> */}
      <Component />
    </div>
  );
}
