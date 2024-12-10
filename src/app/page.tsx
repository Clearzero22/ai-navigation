import React from "react";
import CardSection from "./components/CardSection";
import SearchBar from "./components/SearchBar";
import FloatingButton from "./components/FloatingButton";
import featuredTools from "./dada/featuredTools";
import courses from "./dada/courses";
import communityLinks from "./dada/communityLinks";
import AIWritingToolsSection from "./components/AIWritingToolsSection";


export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <CardSection title="Featured Tools" items={featuredTools} />
      <CardSection title="AI Courses" items={courses} />
      {/* <CardSection title="Community Links" items={communityLinks} /> */}
      <AIWritingToolsSection />
      {/* <FloatingButton /> */}
    </div>
  );
}