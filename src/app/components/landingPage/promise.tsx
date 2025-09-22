'use client'

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import {motion} from 'framer-motion'

export default function Promise(){
    return(
        <>
        <div className="flex-col flex items-center bg-white py-12 px-4 md:px-68">

            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
                PROMISE
            </motion.div>
            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-bold text-2xl md:text-5xl text-blue-800 ">
                Promise
            </motion.div>
            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-secondary font-light text-sm md:text-lg text-zinc-700 tracking-wide ">
                What we stand for, is what we deliver.
            </motion.div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 md:px-16">

                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.2}}
                className="flex flex-col w-full">

                    <div className="max-w-md w-full">
                    <Image
                        src="/promise1.webp"
                        alt=""
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-t-lg"
                    />
                    </div>
                    <div className="bg-[#a6ce38] rounded-b-lg flex flex-col">
                    <div className="font-secondary font-bold px-4 pt-8 text-2xl tracking-wide">
                        Quality <br /> Assurance
                    </div> 
                    <div className="font-secondary font-light px-4 pb-8 text-base mt-6 pr-36">
                        We promise strict quality checks for strength, precision, and performance.
                    </div>
                    <div className="bg-[#a6ce38] border-8 p-3 border-white rounded-tl-lg items-end ml-auto ">       
                        <ArrowUpRight size="25" className="text-white"/>
                    </div>
                    </div>

                </motion.div>

                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.3}}
                className="flex flex-col w-full">

                    <div className="max-w-md w-full">
                    <Image
                        src="/promise2.webp"
                        alt=""
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-t-lg"
                    />
                    </div>
                    <div className="bg-[#a6ce38] rounded-b-lg flex flex-col">
                    <div className="font-secondary font-bold px-4 pt-8 text-2xl tracking-wide">
                         Sustainability <br /> Commitment
                                  
                    </div> 
                    <div className="font-secondary font-light px-4 pb-8 text-base mt-6 pr-20">
                         We are committed to greener building with less waste, lower energy use, and a smaller carbon footprint. 
                    </div>
                    <div className="bg-[#a6ce38] border-8 p-3 border-white rounded-tl-lg items-end ml-auto ">       
                        <ArrowUpRight size="25" className="text-white"/>
                    </div>
                    </div>

                </motion.div>

                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.4}}
                className="flex flex-col w-full">

                    <div className="max-w-md w-full">
                    <Image
                        src="/promise3.webp"
                        alt=""
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-t-lg"
                    />
                    </div>
                    <div className="bg-[#a6ce38] rounded-b-lg flex flex-col">
                    <div className="font-secondary font-bold px-4 pt-8 text-2xl tracking-wide">
                        Innovation in <br /> Construction
                                     
                    </div> 
                    <div className="font-secondary font-light px-4 pb-8 text-base mt-6 pr-40">
                        We are redefining how India builds: faster, greener, and more efficiently. 
                    </div>
                    <div className="bg-[#a6ce38] border-8 p-3 border-white rounded-tl-lg items-end ml-auto ">       
                        <ArrowUpRight size="25" className="text-white"/>
                    </div>
                    </div>

                </motion.div>

            </div>
        </div>
        </>
    )
}