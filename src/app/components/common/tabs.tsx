"use client";
import { useEffect, useRef, useState } from "react";

interface Tab {
  id: string; // must match section id
  label: string;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) observer.current?.observe(section);
    });

    return () => {
      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);
        if (section) observer.current?.unobserve(section);
      });
    };
  }, [tabs]);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };

  return (
    <div className="sticky mx-78 rounded-lg top-35 z-50 font-bold bg-white shadow-sm">
      <div className="flex justify-between font-primary font-bold text-xl gap-6 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`px-4 py-3 font-semibold transition-colors ${
              activeTab === tab.id
                ? "text-primary border-b-2 font-bold border-teal-600"
                : "text-gray-500 hover:text-black font-bold"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
