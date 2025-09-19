"use client";
import { useState } from "react";

type QnaProps = {
    question: string;
    answer: string;
}

export default function Qna({question, answer}: QnaProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 font-primary">
      {/* Question Header */}
      <div 
        className="bg-primary rounded-t-xl text-white px-6 py-3 cursor-pointer flex justify-between items-center hover:bg-opacity-90 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-lg font-medium">{question}</div>
        <button
          className="text-white font-primary font-extralight relative  text-4xl focus:outline-none transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </button>
      </div>
      
      {/* Answer Content */}
      <div
        className={`bg-white border-1 border-primary overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 text-gray-700 text-lg leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}