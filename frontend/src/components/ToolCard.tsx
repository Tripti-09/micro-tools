import Link from "next/link";

export default function ToolCard({ name, description, path }: any) {
  return (
    <Link href={path}>
      <div className="border rounded-xl p-6 hover:shadow-md transition cursor-pointer">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </Link>
  );
}