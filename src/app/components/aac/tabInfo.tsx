'use client'

import Tabs from "../common/tabs";
import Link from "next/link";
import './tab.css'
import Queries from "./queries";
import Calculator from "./calculator";
import Image from "next/image";
import { motion } from 'framer-motion'
import { ArrowRight } from "lucide-react";

export default function HomePage() {

  const cbmData = [
    {
      srNo: 1,
      dimensions: "600 × 200 × 50",
      cbm: "0.006",
      blocksInCBM: "166.67"
    },
    {
      srNo: 2,
      dimensions: "600 × 200 × 75",
      cbm: "0.009",
      blocksInCBM: "111.11"
    },
    {
      srNo: 3,
      dimensions: "600 × 200 × 100",
      cbm: "0.012",
      blocksInCBM: "83.33"
    },
    {
      srNo: 4,
      dimensions: "600 × 200 × 125",
      cbm: "0.015",
      blocksInCBM: "66.67"
    },
    {
      srNo: 5,
      dimensions: "600 × 200 × 150",
      cbm: "0.018",
      blocksInCBM: "55.56"
    },
    {
      srNo: 6,
      dimensions: "600 × 200 × 175",
      cbm: "0.021",
      blocksInCBM: "47.62"
    },
    {
      srNo: 7,
      dimensions: "600 × 200 × 200",
      cbm: "0.024",
      blocksInCBM: "41.67"
    },
    {
      srNo: 8,
      dimensions: "600 × 200 × 225",
      cbm: "0.027",
      blocksInCBM: "37.04"
    },
    {
      srNo: 9,
      dimensions: "600 × 200 × 250",
      cbm: "0.030",
      blocksInCBM: "33.33"
    },
    {
      srNo: 10,
      dimensions: "600 × 200 × 275",
      cbm: "0.033",
      blocksInCBM: "30.30"
    },
    {
      srNo: 11,
      dimensions: "600 × 200 × 300",
      cbm: "0.036",
      blocksInCBM: "27.78"
    }
  ];

      const specifications = [
    {
      property: "Size (Length x Height)",
      unit: "mm",
      aacBlocks: "600×200",
      blockJoiningMortar: "NA"
    },
    {
      property: "Size (Width)",
      unit: "mm",
      aacBlocks: "75 / 100 / 125 / 150 / 200 / 225 / 250 / 300",
      blockJoiningMortar: "NA"
    },
    {
      property: "Size Tolerance (Max)",
      unit: "mm",
      aacBlocks: "±3 (Height & Width),±3 (Length)",
      blockJoiningMortar: "H & W = ±3 mm, L = ±5 mm"
    },
    {
      property: "Compressive Strength",
      unit: "N/mm²",
      aacBlocks: "≥ 3.5 for Grade-2 and ≥ 4.0 for Grade-1",
      blockJoiningMortar: "≥ 3.0 for Grade-2 and ≥ 4.0 for Grade-1 @ density range 551-650 Kg/m³"
    },
    {
      property: "Oven Dry Density",
      unit: "Kg/m³",
      aacBlocks: "560 - 640",
      blockJoiningMortar: "551 - 650"
    },
    {
      property: "Fire Resistance",
      unit: "Hrs.",
      aacBlocks: "4 (for 150 mm thick wall)",
      blockJoiningMortar: "Min 2 hrs. is desirable"
    },
    {
      property: "Thermal Conductivity (K Value)",
      unit: "W/mK",
      aacBlocks: "0.16 - 0.21",
      blockJoiningMortar: "0.24 Max for G-1 and G-2 @ density range 551-650 Kg/m³"
    },
    {
      property: "Sound Reduction",
      unit: "dB",
      aacBlocks: "37-42",
      blockJoiningMortar: "NA"
    },
    {
      property: "Modulus of Elasticity",
      unit: "MPa",
      aacBlocks: "2040",
      blockJoiningMortar: "NA"
    },
    {
      property: "Thermal Resistance (R Value)",
      unit: "m2KW",
      aacBlocks: "0.95 (200 mm width) @ 0.21 W/ mK",
      blockJoiningMortar: "Max Value is desirable"
    },
    {
      property: "Thermal Conductance (U Value)",
      unit: "W/m2K",
      aacBlocks: "1.05 (200 mm width) @ 0.21 W/ mK",
      blockJoiningMortar: "Minimum Value is desirable"
    },
    {
      property: "Drying Shrinkage (Maximum)",
      unit: "%",
      aacBlocks: "0.04 Maximum",
      blockJoiningMortar: "0.1 for Gr-2 & 0.05 for Gr-1 Maximum"
    },
    {
      property: "Sound Transmission Class Rating",
      unit: "dB",
      aacBlocks: "44",
      blockJoiningMortar: "NA"
    },
    {
      property: "Capillary Water Absorption",
      unit: "gm/ dm2",
      aacBlocks: "180 Max",
      blockJoiningMortar: "< 210 @ 24 hours (as per NFP 14306)"
    }
  ];

      const features = [
    {
      id: 1,
      icon: "/box-1.svg",
      title: "Energy Efficient",
      description: "High thermal insulation helps maintain indoor temperature, reducing heating and cooling costs."
    },
    {
      id: 2,
      icon: "/box-2.webp", // You can update these icons as needed
      title: "Lightweight",
      description: "Significantly lighter than traditional bricks, reducing structural load and transportation costs."
    },
    {
      id: 3,
      icon: "/box-3.webp",
      title: "Fire Resistant",
      description: "Excellent fire resistance properties providing enhanced safety for residential and commercial buildings."
    },
    {
      id: 4,
      icon: "/box-4.webp",
      title: "Sound Insulation",
      description: "Superior acoustic properties that reduce noise transmission between rooms and from outside."
    },
    {
      id: 5,
      icon: "/box-5.webp",
      title: "Pest Resistant ",
      description: "Being inorganic, AAC blocks naturally resist termites and pests, reducing the risk of damage. "
    },
    {
      id: 6,
      icon: "/box-6.webp",
      title: "Space Efficient",
      description: " Available year-round, reducing the need for bulk storage at the site. "
    },
    {
      id: 7,
      icon: "/box-7.webp",
      title: "Low Wastage ",
      description: "Breakage is under 5%, ensuring better material utilization and lower on-site waste. "
    },
    {
      id: 8,
      icon: "/box-8.webp",
      title: "Time Saving ",
      description: "Larger size and light weight speed up construction and reduce labor time. "
    },
    {
      id: 9,
      icon: "/box-9.webp",
      title: " Sound Insulation ",
      description: " Good sound-blocking properties make AAC ideal for residential and commercial buildings. "
    },
    {
      id: 10,
      icon: "/box-10.webp",
      title: "Easy to Work With ",
      description: "Easy to lift, cut, and install, especially in high-rise and large-scale projects. "
    }
  ];
  
  const tabs = [
    { id: "benefits", label: "BENEFITS" },
    { id: "calculator", label: "BLOCKS CALCULATOR" },
    { id: "technical", label: "TECHNICAL SPECIFICATIONS" },
    { id: "sizes", label: "SIZES OFFERED" },
    { id: "use-cases", label: "USE CASES" },
    { id: "faqs", label: "FAQS" },
  ];

  return (
    <main>
      <Tabs tabs={tabs} />

      <section id="benefits" className="flex-col bg flex items-center bg-white py-12 md:px-72">
        
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary font-extrabold text-white/[0.08] md:px-68 text-9xl relative top-30 ">
               BENEFITS
            </motion.div>
            <motion.div
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary text-white font-bold text-2xl md:text-5xl md:px-68 text-white-800 ">
               Benefits
            </motion.div>
                <motion.div 
                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.3}}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 justify-between">
                {features.map((feature) => (
                    <div key={feature.id} className="flex items-center text-center flex-col md:flex-row gap-4">
                    <div className="p-4 bg-white w-fit rounded-full">
                        <div className="relative w-8 h-8 md:w-16 md:h-16">
                        <Image 
                            src={feature.icon}
                            alt={feature.title}
                            fill
                            className="object-fill"
                        />
                        </div>
                    </div>

                    <div className="flex text-white flex-col gap-2">
                        <div className="font-primary text-lg md:text-2xl font-medium">
                        {feature.title}
                        </div>
                        <div className="font-secondary text-xs md:px-0 px-12 md:text-base font-light">
                        {feature.description}
                        </div>
                    </div>
                    </div>
                ))}
                </motion.div>
      </section>
2
      <section id="calculator" className="flex-col flex  items-center bg-white py-12 md:px-72">
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary font-extrabold text-primary/[0.08] md:px-68 text-9xl relative top-30 ">
               CALCULATOR
            </motion.div>
            <motion.div
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary text-blue-800 font-bold text-2xl md:text-5xl md:px-68 text-white-800 ">
              AAC Blocks Calculator
            </motion.div>

        <div className="">
  <Calculator />
        </div>
     
      </section>

      <section id="technical" className="flex-col  flex items-center bg-white py-12 md:px-72">
                <motion.div
                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.1}}
                className="font-primary font-extrabold text-primary/[0.08] md:px-68 text-9xl relative top-30 ">
               SPECIFICATIONS
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.2}}
            className="font-primary text-blue-800 font-bold text-2xl md:text-5xl md:px-68 text-white-800 ">
               Technical Specifications
            </motion.div>
            <div className="w-full overflow-x-auto">
      <motion.table 
      initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.3}}
      className="w-full border-collapse border mt-20 border-primary">
    
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-primary px-1 md:px-4 py-2 text-xs md:text-base md:py-3 text-left font-medium text-gray-700 min-w-48">
              Property
            </th>
            <th className="border border-primary px-1 md:px-4 py-2 text-xs md:text-base md:py-3 text-center font-medium text-gray-700 w-20">
              Unit
            </th>
            <th className="border border-primary px-1 md:px-4 py-2 text-xs md:text-base md:py-3 text-left font-medium text-gray-700 min-w-64">
              AAC Blocks
            </th>
            <th className="border border-primary px-1 md:px-4 py-2 text-xs md:text-base md:py-3 text-left font-medium text-gray-700 min-w-64">
              Block Joining Mortar
            </th>
          </tr>
        </thead>
        
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-primary px-1 md:px-4 py-1 md:py-3 text-xs md:text-base font-medium text-gray-800">
                {spec.property}
              </td>
              <td className="border border-primary px-1 md:px-4 py-1 md:py-3 text-xs md:text-base text-center text-gray-700">
                {spec.unit}
              </td>
              <td className="border border-primary px-1 md:px-4 py-1 md:py-3 text-xs md:text-base text-gray-700">
                {spec.aacBlocks}
              </td>
              <td className="border border-primary px-1 md:px-4 py-1 md:py-3 text-xs md:text-base text-gray-700">
                {spec.blockJoiningMortar}
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
      </section>

      <section id="sizes" className="flex-col flex items-center bg-white py-12">
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary font-extrabold text-primary/[0.08] px-4 md:px-68 text-9xl relative top-30 ">
               SIZES OFFERED
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary text-blue-800 font-bold text-2xl md:text-5xl px-4 md:px-68 text-white-800 ">
               Size Offered
            </motion.div>
             <motion.div 
             initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.2}}
             className="w-full overflow-x-auto px-4 md:px-72 mt-20">
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-teal-100">
            <th className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs md:text-base text-center font-medium text-gray-700 w-20">
              Sr. No
            </th>
            <th className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs md:text-base text-center font-medium text-gray-700 min-w-48">
              Dimensions (mm)
            </th>
            <th className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs md:text-base text-center font-medium text-gray-700 w-32">
              CBM of AAC
            </th>
            <th className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs md:text-base text-center font-medium text-gray-700 w-40">
              No. of Blocks in 1 CBM
            </th>
          </tr>
        </thead>
        
        <tbody>
          {cbmData.map((row, index) => (
            <tr key={row.srNo} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs text-center text-gray-800">
                {row.srNo}.
              </td>
              <td className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs text-center text-gray-700 font-mono">
                {row.dimensions}
              </td>
              <td className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs text-center text-gray-700 font-mono">
                {row.cbm}
              </td>
              <td className="border border-gray-400 px-1 md:px-4 py-1 md:py-3 text-xs text-center text-gray-700 font-mono">
                {row.blocksInCBM}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
            
      </section>

      <section id="use-cases" className="flex-col flex items-center bg-white py-12">
        <motion.div 
        initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
        className="font-primary font-extrabold text-primary/[0.08] md:px-68 text-9xl relative top-30 ">
              USE CASES
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary text-blue-800 font-bold text-2xl md:text-5xl  md:px-68 text-white-800 ">
               Ideal Use Cases
            </motion.div>

            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="grid grid-cols-1 md:grid-cols-2 justify-between gap-x-20 gap-y-16 mt-20 px-4 text-center md:text-left md:px-72">

                 <motion.div 
                 
                 className="flex flex-col items-center md:flex-row gap-4">

                <div className="relative w-12 h-16 md:w-26 md:h-30">
                    <Image 
                    src="/Hotel.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-primary font-bold text-lg md:text-2xl text-primary">
                    High-Rise Buildings 
                </div>
                <div className="font-secondary font-light text-zinc-600 text-xs md:text-base">
                    Lightweight yet strong materials reduce structural load and speed up construction. 
                </div>
                </div>
                

            </motion.div>

             <div className="flex flex-col items-center md:flex-row gap-4">

                <div className="relative w-16 h-16 md:w-40 md:h-30">
                    <Image 
                    src="/Group7.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-primary font-bold text-lg md:text-2xl text-primary">
                   Residential Projects 
                </div>
                <div className="font-secondary font-light text-zinc-600 text-xs md:text-base">
                   Perfect for building modern homes with better insulation, soundproofing, and reduced material wastage. 
                </div>
                </div>
                

            </div>

             <div className="flex flex-col items-center md:flex-row gap-4">

                <div className="relative w-16 md:w-30 h-16 md:h-30">
                    <Image 
                    src="/Layer_1.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-primary font-bold text-lg md:text-2xl text-primary">
                     Commercial Buildings 
                </div>
                <div className="font-secondary font-light text-zinc-600 text-xs md:text-base">
                    Supports large-scale developments with consistent quality and faster execution. 
                </div>
                </div>
                

            </div>

             <div className="flex flex-col items-center md:flex-row gap-4">

                <div className="relative w-20 h-20 md:w-40 md:h-30">
                    <Image 
                    src="/Group-1.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-primary font-bold text-lg md:text-2xl text-primary">
                    Government Buildings 
                </div>
                <div className="font-secondary font-light text-zinc-600 text-xs md:text-base">
                     Meets high standards of durability, cost-efficiency, and sustainability for public infrastructure. 
                </div>
                </div>
                

            </div>

             <div className="flex flex-col items-center md:flex-row gap-4">

                <div className="relative w-20 h-20 md:w-40 md:h-30">
                    <Image 
                    src="/Groupaaaa-1.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-primary font-bold text-lg md:text-2xl text-primary">
                    Hospitals and Care Centres 
                </div>
                <div className="font-secondary font-light text-zinc-600 text-xs md:text-base">
                    Provides a durable, fire-resistant, comfortable and safe environment for public spaces. 
                </div>
                </div>
                

            </div>

             <div className="flex flex-col items-center md:flex-row gap-4">

                <div className="relative w-20 h-20 md:w-40 md:h-30">
                    <Image 
                    src="/Page-1-1.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-primary font-bold text-lg md:text-2xl text-primary">
                     Schools & Colleges 
                </div>
                <div className="font-secondary font-light text-zinc-600 text-xs md:text-base">
                     Safe, durable, and energy-efficient blocks that speed up building comfortable learning spaces. 
                </div>
                </div>
                

            </div>

            </motion.div>
           
      </section>

      <section id="faqs" className="flex-col gbg flex items-center bg-white py-12">
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary font-extrabold text-white/[0.08] px-68 text-9xl relative top-30 ">
               FAQS
            </motion.div>
            <motion.div
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
             className="font-primary text-white font-bold text-lg md:text-5xl px-68 text-white-800 ">
               FAQs
            </motion.div>
            <div>
            <Queries />

              <Link 
              href="/contact"
              >
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.2}}
            className="font-primary text-sm md:text-2xl hover:bg-black hover:text-white transition-all duration-200 group bg-white px-6 py-3 rounded-lg w-fit mx-auto font-medium">
                Enquire Now <ArrowRight className="inline text-black group-hover:text-white"/>
            </motion.div>  
            </Link>
            
            </div>
      </section>
    </main>
  );
}
