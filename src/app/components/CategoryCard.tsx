import React from "react";

export default function CategoryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-gray-300 p-4 shadow-md rounded-lg hover:rounded-2xl transition-all duration-300">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}