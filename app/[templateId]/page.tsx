import { notFound } from "next/navigation";
import { registry } from "@/registry";

export const generateStaticParams = async () => {
  return Object.keys(registry).map((templateId) => ({ templateId }));
};
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
      <Component />
    </div>
  );
}
