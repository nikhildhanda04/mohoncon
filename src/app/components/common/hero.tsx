'use client'

import Image from "next/image"
import { motion } from 'framer-motion'

export default function Hero() {
    return(
        <>
        <div className="flex flex-col px-4 md:px-68 justify-center h-[90vh] py-28">

            <div className="absolute top-0 left-0 z-1 w-full h-[90vh]">
                <Image
                src="/bannerr.webp"
                priority
                alt=""
                fill
                className="object-cover"
                />
            </div>

            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-bold z-89 text-5xl md:text-7xl text-left">
                 We Prepare <br/> For The Future 
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.6,}}
            className="font-secondary font-lg z-89 font-normal md:mt-0 mt-2 md:font-medium text-zinc-700">
                With lasting materials and sustainable solutions, <br /> we shape a better India. 
            </motion.div>

        </div>
        </>
    )
}