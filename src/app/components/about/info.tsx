'use client'
import { useState } from "react";
import Image from "next/image";
import {motion } from 'framer-motion'

export default function Info() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabContent: { [key: string]: { title: string; description: string } } = {
    mission: {
      title: "Our Mission",
      description: "To provide builders and homeowners with quality AAC blocks and mortar through smart technology and eco-friendly practices, ensuring faster, stronger, and greener projects."
    },
    vision: {
      title: "Our Vision",
      description: "To lead the way India constructs towards a stronger, smarter, and more sustainable future."
    },
    value: {
      title: "Our Values",
      description: "We stand for strength, innovation, sustainability, integrity, and lasting trust in every block we build."
    }
  };

  return (
    <>
      <div className="py-20 px-6 md:px-16 lg:px-68 flex flex-col-reverse text-center md:flex-row gap-16">
        <div className="flex flex-col gap-6 w-full">
          <motion.div 
          initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
          className="uppercase text-primary text-base md:text-2xl">
            about mohoncon
          </motion.div>
          <motion.div 
          initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.1}}
          className="font-secondary tracking-wide font-semibold text-gray-600 text-2xl md:text-4xl">
            A Trend of Innovation and Precision
          </motion.div>
          <motion.div 
          initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.2}}
          className="font-primary text-sm md:text-base text-zinc-700">
            At Mohancon Builds, we believe that building the future starts with better choices today. <br />
            We manufacture construction materials like AAC blocks and Block Joining Mortar that are light, strong, energy-saving, and better for the environment.
          </motion.div>
          
          {/* Tabbed Section */}
          <div className="mt-8">
            {/* Tab Headers */}
            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.3}}
            className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-3 font-medium font-primary text-sm transition-colors duration-200 ${
                  activeTab === "mission"
                    ? "bg-teal-600 text-white border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-3 font-medium font-primary text-sm transition-colors duration-200 ${
                  activeTab === "vision"
                    ? "bg-teal-600 text-white border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab("value")}
                className={`px-6 py-3 font-medium font-primary text-sm transition-colors duration-200 ${
                  activeTab === "value"
                    ? "bg-teal-600 text-white border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Our Value
              </button>
            </motion.div>
            
            {/* Tab Content */}
            <div className="py-6">
              <motion.div 
              initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.4}}
              className="font-primary text-sm md:text-base text-zinc-900 leading-relaxed">
                {tabContent[activeTab].description}
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
        initial = {{ x:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
        className="relative w-90  h-80 md:w-166 md:h-114">
            <Image 
            src="/about.webp"
            alt=""
            fill
            className="object-cover rounded-lg"
            />
        </motion.div>
      </div>
    </>
  );
}