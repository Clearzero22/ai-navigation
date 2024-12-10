import React from "react";

const categories = [
    { name: "AI 写作工具", icon: "/icons/writing.svg", link: "#ai-writing-tools" },
    { name: "AI 图像工具", icon: "/icons/image.svg", link: "#ai-image-tools" },
    { name: "AI 开发平台", icon: "/icons/development.svg", link: "#ai-development-platforms" },
  ];

export default function Sidebar() {
    return (
      <div className="w-64 bg-purple-600 text-white p-4">
        <h2 className="text-xl font-bold mb-6">AI Navigation</h2>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href={category.link}
                className="flex items-center gap-4 hover:bg-purple-500 p-2 rounded-lg transition"
              >
                <img src={category.icon} alt={category.name} className="w-6 h-6" />
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }