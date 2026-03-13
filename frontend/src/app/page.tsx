import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Micro Tools</h1>

        <p className="text-gray-600 text-lg">
          A collection of backend-powered micro tools built with Go and Next.js.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.name}
            name={tool.name}
            description={tool.description}
            path={tool.path}
          />
        ))}
      </div>

    </main>
  );
}