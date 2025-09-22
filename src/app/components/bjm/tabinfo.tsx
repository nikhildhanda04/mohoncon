'use client'
import Tabs from "../common/tabs";
import Image from "next/image";
import { motion } from 'framer-motion'
import Queries from "../aac/queries";
import { ArrowRight } from "lucide-react";
import "./tab.css"

export default function TabInfo(){
    const mortarSpecs = [
    {
      property: "Appearance",
      value: "Grey Powder"
    },
    {
      property: "Water Required",
      value: "35%r"
    },
    {
      property: "Pot Life",
      value: "~1.5 - 2 hrs"
    },
    {
      property: "Curing",
      value: "Not required"
    },
    {
      property: "Tensile Adhesive Strength",
      value: ">0.4 N/mm2 (as per ASTM - C1660)"
    },
    {
      property: "Coverage",
      value: "170 - 180 sq.ft (for 4\" thick blocks)"
    }
  ];

      const tabs = [
    { id: "benefits", label: "BENEFITS" },
    { id: "technical", label: "TECHNICAL SPECIFICATIONS" },
    { id: "use-cases", label: "IDEAL USE CASES" },
    { id: "faqs", label: "FAQS" },
  ];
    return(
        <>
        <main>
                <Tabs tabs={tabs} />

                <section id="benefits" className="flex-col gbg flex items-center bg-white py-12 px-4 md:px-72">
                  <motion.div 
                  initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.1}}
                  className="font-primary text-white font-medium text-lg md:text-5xl uppercase text-white-800 ">
                   Key benefits block joining mortar 
                  </motion.div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mt-20">

                    <motion.div 
                    initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                    className="flex flex-col items-center gap-4">
                      <div className="relative w-24 h-20">
                        <Image 
                        src="/bjm1.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                      </div>
                      <div className="font-secondary  text-white text-xl">
                        Earthquake Resistant
                      </div>
                    </motion.div>

                                        <motion.div
                                                            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                                        className="flex flex-col items-center gap-4">
                      <div className="relative w-24 h-20">
                        <Image 
                        src="/bjm2.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                      </div>
                      <div className="font-secondary  text-white text-xl">
                        Earthquake Resistant
                      </div>
                    </motion.div>

                                        <motion.div 
                                                            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                                        className="flex flex-col items-center gap-4">
                      <div className="relative w-24 h-20">
                        <Image 
                        src="/bjm3.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                      </div>
                      <div className="font-secondary  text-white text-xl">
                                              
                        Shock & impact resistant
                      </div>
                    </motion.div>

                                        <motion.div 
                                                            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                                        className="flex flex-col items-center gap-4">
                      <div className="relative w-24 h-26">
                        <Image 
                        src="/bjm4.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                      </div>
                      <div className="font-secondary  text-white text-xl">
                                              
                      High thermal Insulation
                      </div>
                    </motion.div>

                                        <motion.div 
                                                            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                                        className="flex flex-col items-center gap-4">
                      <div className="relative w-24 h-26">
                        <Image 
                        src="/bjm5.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                      </div>
                      <div className="font-secondary  text-white text-xl">
                                              
                        Superior adhesion
                      </div>
                    </motion.div>

                      <motion.div 
                                          initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                      className="flex flex-col items-center gap-4">
                      <div className="relative w-24 h-26">
                        <Image 
                        src="/bjm6.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                      </div>
                      <div className="font-secondary  text-white text-xl">
                                                
                          Excellent tensile strength
                      </div>
                    </motion.div>


                  </div>
                    
                </section>
                <section id="technical" className="flex-col  flex items-center bg-white py-12 px-4 md:px-72">
                  <motion.div 
                                      initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                  className="font-primary font-extrabold text-primary/[0.08] px-68 text-9xl relative top-30 ">
               SPECIFICATIONS
            </motion.div>
            <motion.div 
                                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
            className="font-primary text-blue-800 font-bold text-lg md:text-5xl md:px-68 text-white-800 ">
               Technical Specifications
            </motion.div>\
               <div className="w-full max-w-2xl mt-20">
      <motion.table 
                          initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.1}}
      className="w-full border-collapse font-primary border border-gray-400">
        <tbody>
          {mortarSpecs.map((spec, index) => (
            <tr key={index}>
              <td className="border border-primary px-2 md:px-4 p-1 md:py-3 text-xs md:text-base  font- text-gray-800 w-1/3">
                {spec.property}
              </td>
              <td className="border border-primary px-2 md:px-4 p-1 md:py-3 text-xs md:text-base bg-white text-gray-700">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
                </section>
               <section id="use-cases" className="flex-col flex items-center bg-white py-12">
                       <motion.div 
                                           initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                       className="font-primary font-extrabold text-primary/[0.08] px-68 text-9xl relative top-30 ">
                             USE CASES
                           </motion.div>
                           <motion.div 
                                               initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                           className="font-primary text-blue-800 font-bold text-lg md:text-5xl md:px-68 text-white-800 ">
                              Ideal Use Cases
                           </motion.div>
               
                           <motion.div 
                                               initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.2}}
                           className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left justify-between gap-x-20 gap-y-16 mt-20 px-4 md:px-72">
               
                                <div className="flex flex-col items-center md:flex-row gap-4">
               
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
                                          </div>
                         </motion.div>
                          
                     </section>
                      <section id="faqs" className="flex-col gbg flex items-center bg-white py-12">
            <div className="font-primary font-extrabold text-white/[0.08] px-68 text-9xl relative top-30 ">
               FAQS
            </div>
            <div className="font-primary text-white font-bold text-xl md:text-5xl px-68 text-white-800 ">
               FAQs
            </div>
            <div>
            <Queries />
            <motion.div 
                                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
            className="font-primary text-sm md:text-2xl hover:bg-black hover:text-white transition-all duration-200 group bg-white px-6 py-3 rounded-lg w-fit mx-auto font-medium">
                Enquire Now <ArrowRight className="inline text-black group-hover:text-white"/>
            </motion.div>
            </div>
      </section>


        </main>
        </>
    )
}