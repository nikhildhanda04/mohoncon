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
            transition = {{ duration:0.7,}}
                    className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
                       BLOCK JOINING MORTAR
                    </motion.div>
                    <motion.div 
                    initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
                    className="font-primary font-bold text-lg md:text-5xl md:px-68 text-blue-800 ">
                        Block Joining Mortar
                    </motion.div>
                    
                <motion.div
                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
                     className="font-secondary font-light text-xs md:text-lg md:px-68 text-zinc-700 tracking-wide ">
                        Strong Bonds for a safer, stronger structure.
                    </motion.div>
                    
                    <motion.div 
                    initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.1}}
                    className="relative w-120 h-100 md:w-290 md:h-200 mt-6">
                        <Image 
                        src="/blockmortor.webp"
                        alt="info"
                        fill
                        className="object-fill"
                        />
                    </motion.div>
        
                    <motion.div 
                    initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.6, delay:0.2}}
                    className="text-center text-xs px-4 md:text-base  text-zinc-500 md:px-74 mt-6">
                       Mohancon’s Block Joining Mortar is a ready-to-use solution made especially for AAC blocks. It sticks blocks firmly together <br />
while using less material than traditional mortar.<br />
<br />
With faster drying, less shrinkage, and stronger bonds, it helps builders finish projects quicker and cleaner. 
                    </motion.div>
                </div>
        </>
    )
}