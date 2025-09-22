"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'

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
    <div className="sticky mx-2 md:mx-40 rounded-lg top-35 z-50 font-bold bg-white shadow-sm">
      <motion.div
        initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.7 }}
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        <div className="flex justify-between font-primary font-bold text-xs md:text-xl gap-2 md:gap-6 border-b border-gray-300 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`px-1 md:px-4 py-1 md:py-3 font-semibold transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-b-2 font-bold border-teal-600"
                  : "text-gray-500 hover:text-black font-bold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}