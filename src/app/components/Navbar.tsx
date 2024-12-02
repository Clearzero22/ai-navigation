import React from "react";

const menuItems = ["Daily AI News", "Submit AI Tools", "AI Blog"];

export default function Navbar() {
  return (
    <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI Dashboard</h1>
      <ul className="flex gap-6">
        {menuItems.map((item) => (
          <li key={item} className="hover:text-purple-600 cursor-pointer transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}