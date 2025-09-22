'use client'
import { motion } from "framer-motion"
import Link from "next/link"

import Image from "next/image"

export default function Info(){
    return(
        <>
        <div className="flex flex-col items-center px-4 md:px-68 py-20">

                        <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
               GREENER
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
            className="font-primary font-bold text-lg md:text-5xl text-blue-800 ">
                Building a Greener Tomorrow
            </motion.div>
            <motion.div 
           initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}} 
            className="font-secondary font-light text-xs text-center md:text-lg text-zinc-700 tracking-wide ">
                 We are dedicated to sustainable building practices that reduce environmental impact and promote eco-friendly construction.
            </motion.div>

            <motion.div 
             initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
            className="relative w-100 h-68 md:w-310 md:h-180 mt-20">
                <Image 
                src="/sustain.webp"
                alt=""
                fill
                className="object-fill"
                />
            </motion.div>

            <motion.div 
             initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
            className="font-secondary font-light text-zinc-700 text-xs md:text-lg text-center mt-10 md:px-20 leading-relaxed">
                At Mohancon Builds, we believe that what we build today should leave the world better for tomorrow.
For us, sustainability isn’t a feature; it’s how we think, plan, and operate.<br />
<br />
From every AAC block we cast to every bag of joining Mortar we seal, we’re mindful of the impact we leave behind.<br />
<br />
We choose smarter materials, use less energy, and reduce waste. 
            </motion.div>

            <Link
            href="/contact"
            >
             <motion.div 
             initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
            className="bg-primary text-white font-primary px-3 md:px-6 py-1 md:py-3 rounded-lg text-sm md:text-2xl hover:bg-black transition-all duration-200 mt-12">
                Know More 
            </motion.div>           
            </Link>


        </div>
        </>
    )
}