import React from "react";

const aiWritingTools = [
  {
    name: "ChatGPT",
    description: "An AI-powered writing assistant.",
    image: "/images/chatgpt.png",
  },
  {
    name: "Grammarly",
    description: "Grammar and style improvement for professional writing.",
    image: "/images/grammarly.png",
  },
  {
    name: "Wordtune",
    description: "Rewrite and rephrase your sentences for clarity.",
    image: "/images/wordtune.png",
  },
  {
    name: "Copy.ai",
    description: "AI-driven copywriting for marketers.",
    image: "/images/copyai.png",
  },
  {
    name: "Jasper",
    description: "Content creation for blogs, ads, and more.",
    image: "/images/jasper.png",
  },
  {
    name: "Writesonic",
    description: "Generate high-quality content with AI.",
    image: "/images/writesonic.png",
  },
];

export default function AIWritingToolsSection() {
  return (
    <section id="ai-writing-tools" className="my-10">
      <h2 className="text-3xl font-bold mb-6">AI 写作工具</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {aiWritingTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
          >
            <img src={tool.image} alt={tool.name} className="w-full h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold">{tool.name}</h3>
            <p className="text-sm text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}