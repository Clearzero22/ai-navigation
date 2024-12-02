import React from "react";

export default function CardSection({ title, items }: { title: string; items: { name: string; description: string }[] }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.name} className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}