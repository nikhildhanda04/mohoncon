'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"

export default function Products(){
    return(
        <>
        <div className="flex flex-col items-center bg-white py-20 overflow-hidden px-4 md:px-68">

            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
                PRODUCTS
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
            className="font-primary font-bold text-2xl md:text-5xl text-blue-800 ">
                Our Products
            </motion.div>
            <motion.div 
           initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}} 
            className="font-secondary text-center font-light text-sm md:text-lg text-zinc-700 tracking-wide ">
                Smart material that builds better, faster, greener.
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:gap-8">

                <motion.div 
                initial = {{ x:-50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
                className="relative w-99 h-80 md:w-full md:h-full ">
                    <Image 
                    src="/prod1.webp"
                    alt="AAC BLOCKS"
                    fill
                    className="object-cover"
                    />
                </motion.div>
                <motion.div 
                                initial = {{ x:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
                className="bg-primary gap-6 md:gap-12 px-4 md:px-28 py-6 md:py-42 font-primary items-center flex flex-col justify-center">

                    <div className="font-primary text-xl md:text-5xl font-semibold underline underline-offset-8 text-white ">
                        AAC BLOCKS
                    </div>
                    <div className="text-center font-primary font-light text-white text-sm md:text-2xl">
                        We manufacture strong, lightweight AAC blocks that are easy to use and better for the environment. They help build faster, reduce weight, and keep spaces cooler. 
                    </div>
                    <Link 
                    href="/aac-block" 
                    
                    className="bg-white font-primarty hover:bg-black hover:text-white transtion-all duration-200 text-primary px-3 md:px-12 py-1 md:py-3 rounded-lg">
                        See More
                    </Link>

                </motion.div>

                <motion.div 
                initial = {{ x:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
                className="relative  md:hidden block w-99 h-80 mt-6 md:mt-0">
                    <Image 
                    src="/prod2.webp"
                    alt="AAC BLOCKS"
                    fill
                    className="object-cover"
                    />
                </motion.div>

                <motion.div 
                initial = {{ x:-50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
                className="bg-[#a6ce38] text-center gap-6 md:gap-12 px-4 md:px-28 py-6 md:py-42 font-primary items-center flex flex-col justify-center">

                    <div className="font-primary text-xl md:text-5xl font-semibold underline underline-offset-8 text-black ">
                         Block Joining Mortar
                    </div>
                    <div className="text-center font-primary font-light text-black text-sm md:text-2xl">
                       We make ready-to-use block joining mortar for faster and stronger construction. It gives a firm grip, reduces waste, and saves time. 
                    </div>
                    <Link
                    href="/block-joining-mortar"
                    className="bg-white font-primarty hover:bg-black hover:text-white transtion-all duration-200 text-primary px-3 md:px-12 py-1 md:py-3 rounded-lg">
                        See More
                    </Link>

                </motion.div>

                <motion.div 
                initial = {{ x:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
                className="relative  hidden md:block w-full">
                    <Image 
                    src="/prod2.webp"
                    alt="AAC BLOCKS"
                    fill
                    className="object-cover"
                    />
                </motion.div>

            </div>

        </div>
        </>
    )
}