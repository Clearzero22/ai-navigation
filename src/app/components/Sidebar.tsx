import React from "react";

const categories = [
  { name: "AI Writing Tools", icon: "/icons/writing.svg" },
  { name: "AI Image Tools", icon: "/icons/image.svg" },
  { name: "AI Development Platforms", icon: "/icons/development.svg" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-purple-600 text-white p-4">
      <h2 className="text-xl font-bold mb-6">AI Navigation</h2>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.name} className="flex items-center gap-4 hover:bg-purple-500 p-2 rounded-lg transition">
            <img src={category.icon} alt={category.name} className="w-6 h-6" />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}