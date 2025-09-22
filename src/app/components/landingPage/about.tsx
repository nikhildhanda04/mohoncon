'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"

export default function About(){
    return(
        <>
        <div className="flex-col flex items-center py-12 bg-white px-4 md:px-68">

            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
                ABOUT
            </motion.div>
            <motion.div 
          initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-bold text-2xl md:text-5xl text-blue-800 ">
                About Us
            </motion.div>
            <motion.div 
           initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-secondary text-center font-light text-sm md:text-lg text-zinc-700 tracking-wide ">
                Smart material that builds better, faster, greener.
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-2 md:px-32 mt-24">

                <motion.div 
                initial = {{ x:-50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
                className="relative w-99 h-108 md:w-full">
                    <Image 
                    src="/about.webp"
                    alt="About Us"
                    fill
                    className="obejct-cover"
                    />
                </motion.div>
                <motion.div 
                initial = {{ x: 50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
                className="font-primary items-top  text-zinc-900 mt-12 md:px-12 pb-36">
                 At Mohancon Builds, we believe that building the future starts with better choices today. <br />

                 <br />

                We are committed to changing the way India builds by offering construction materials that are not only stronger and smarter, but also kinder to the planet. <br />
                 <br />
                We make AAC blocks and Block Joining Mortar that are light, strong, energy-saving, and better for the environment. <br />
                 <br />
                Our mission is simple but powerful. We aim to build every project with care, quality, and a clear purpose that lasts for years to come.  <br />

                <div className="mt-20">
                    <Link
                href="/about-us"
                className="bg-primary px-7 py-2 text-white rounded-lg hover:bg-black  text-xl font-primary font-medium mt-20">
                    Know More
                </Link>
                </div>
                
                </motion.div>
                 
            </div>

        </div>
        </>
    )
}