"use client"
import React, { useState } from "react";

const engines = ["Bing", "Google", "Internal Search"];

export default function SearchBar() {
  const [selectedEngine, setSelectedEngine] = useState(engines[0]);

  return (
    <div className="my-6 text-center">
      <div className="flex justify-center items-center gap-2 mb-4">
        <select
          className="border rounded-lg px-4 py-2"
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
        >
          {engines.map((engine) => (
            <option key={engine} value={engine}>
              {engine}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="w-1/2 border rounded-lg px-4 py-2"
          placeholder={`Search with ${selectedEngine}`}
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Search
        </button>
      </div>
    </div>
  );
}