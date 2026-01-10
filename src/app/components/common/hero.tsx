'use client'

import Image from "next/image"
import { motion } from 'framer-motion'

export default function Hero() {
    return(
        <>
        <div className="flex max-w-[1920px] flex-col px-4 sm:px-20 md:px-44 lg:px-68 justify-center h-[90vh] py-28">

            <div className="absolute top-0 left-0 z-1 w-full h-[90vh]">
                <Image
                src="/bannerr.webp"
                priority
                alt=""
                fill
                className="object-cover"
                />
            </div>

            <motion.h1 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-bold z-89 text-5xl md:text-7xl text-left">
                 We Prepare <br/> For The Future 
            </motion.h1>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.6,}}
            className="font-secondary font-lg z-89 font-normal md:mt-0 mt-2 md:font-medium text-zinc-700">
                Leading AAC Block Manufacturer in Bhopal & MP. <br /> With lasting materials and sustainable solutions, we shape a better India. 
            </motion.div>

        </div>
        </>
    )
}