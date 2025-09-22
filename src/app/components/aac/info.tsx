'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
export default function Info(){
    return(
        <>
        <div className="flex-col flex items-center bg-white py-12 ">
            

            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
            className="font-primary font-extrabold text-primary/[0.08] px-68 text-9xl relative top-30 ">
               AAC BLOCKS
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary font-bold text-2xl text-center md:text-5xl px-4 md:px-68 text-blue-800 ">
                Autoclaved Aerated Concrete Blocks-(AAC)
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-secondary font-light text-sm md:text-lg  md:px-68 text-zinc-700 tracking-wide ">
                Strong Foundations for a Better Future
            </motion.div>
            
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.1}}
            className="relative w-100 h-60 md:w-290 md:h-112 mt-16">
                <Image 
                src="/infoaac.webp"
                alt="info"
                fill
                className="object-fill"
                />
            </motion.div>

            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.3}}
            className="text-center text-xs md:text-base  text-zinc-500 px-4 md:px-74 mt-20">
                At Mohancon Builds, we make AAC blocks that are strong, light, and good for the environment. Made using a precise blend of OPC 53 cement, lime, sand, gypsum, and aluminum powder, our blocks are cured using high-pressure steam, resulting in a durable and thermally efficient product. <br />
                <br />
                These blocks reduce building weight and provide excellent insulation, making structures cooler, safer, and more energy-efficient, all while speeding up construction with their precision and ease of use. <br />
                <br />
                With every block we produce, we stay committed to delivering reliability, workability, and sustainability, building materials that support a greener tomorrow and simplify the way India builds today. 
            </motion.div>

            

        </div>
        </>
    )
}