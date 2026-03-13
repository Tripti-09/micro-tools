"use client";

import { useState } from "react";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary fake result
    setShortUrl("http://localhost:3000/r/abc123");
  };

  return (
    <div className="max-w-xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        URL Shortener
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="url"
          placeholder="Enter a long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg hover:opacity-90"
        >
          Generate Short Link
        </button>

      </form>

      {shortUrl && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">

          <p className="text-sm text-gray-600 mb-1">
            Your short link:
          </p>

          <a
            href={shortUrl}
            className="text-blue-600 font-medium"
          >
            {shortUrl}
          </a>

        </div>
      )}

    </div>
  );
}