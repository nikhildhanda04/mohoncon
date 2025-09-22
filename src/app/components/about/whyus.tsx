'use client'
import Image from "next/image"
import { motion } from 'framer-motion'
export default function Whyus(){
    return(
        <>
        <div className="flex-col flex items-center bg-white pt-12 px-4 md:px-68">

            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, }}
            className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
              MOHONCON
            </motion.div>
            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5}}
            className="font-primary font-bold text-2xl md:text-5xl text-blue-800 ">
                Why Choose Us
            </motion.div>
            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, }}
            className="font-secondary font-light text-sm text-center md:text-lg text-zinc-700 tracking-wide ">
                Quality, innovation, and trust: building excellence with every block
            </motion.div>

            <div className="grid grid-col-1 md:text-left text-center md:grid-cols-2 gap-12 mt-12 px-12">

                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.1}}
                className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative w-12 h-14 md:w-18 md:h-20">
                        <Image 
                        src="/why1.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-lg md:text-3xl font-primary ">
                        Quality Assurances 
                    </div>
                    <div className="font-secondary text-xs md:text-base font-light text-zinc-600">
                        Every product undergoes in-house inspection to verify its strength, accuracy, and compliance with industry standards. 
                    </div>
                </motion.div>

                                <motion.div 
                                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.2}}
                                className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative w-12 h-14 md:w-18 md:h-20">
                        <Image 
                        src="/why2.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-lg md:text-3xl font-primary ">
                        Competitive Advantages
                    </div>
                    <div className="font-secondary text-xs md:text-base font-light text-zinc-600">
                       Our precision-engineered AAC blocks and mortar are lighter and faster to install, and built for long-term performance. 
                    </div>
                </motion.div>

                                <motion.div 
                                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.3}}
                                className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative w-18 h-14 md:w-28 md:h-20">
                        <Image 
                        src="/why3.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-lg md:text-3xl font-primary font-light">
                        Faster Construction Times 
                    </div>
                    <div className="font-secondary text-xs md:text-base font-light text-zinc-600">
                        Our precision-cut blocks and ready-to-use mortar speed up construction, reduce waste, and ease site handling. 
                    </div>
                </motion.div>

                                <motion.div 
                                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.4}}
                                className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative w-10 h-10 md:w-20 md:h-20">
                        <Image 
                        src="/why4.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-lg md:text-3xl font-primary font-light">
                       Green & Sustainable 
                    </div>
                    <div className="font-secondary text-xs md:text-base font-light text-zinc-600">
                        Our products are made using eco-friendly materials and processes that save water, energy, and reduce environmental impact. 
                    </div>
                </motion.div>

                                <motion.div 
                                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.5}}
                                className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative w-10 h-10 md:w-20 md:h-20">
                        <Image 
                        src="/why5.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-lg md:text-3xl font-primary font-light">
                        Cost Efficient 
                    </div>
                    <div className="font-secondary text-xs md:text-base font-light text-zinc-600">
                       Our AAC blocks are 9x bigger than red bricks, using 66% less mortar. Their light weight reduces structural load, cutting costs on steel, cement, and energy. 
                    </div>
                </motion.div>

                                <motion.div 
                                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.6}}
                                className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative w-12 h-10 md:w-24 md:h-20">
                        <Image 
                        src="/why6.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-lg md:text-3xl font-primary font-light">
                        Support & After Sales Service 
                    </div>
                    <div className="font-secondary text-xs md:text-base font-light text-zinc-600">
                      On time delivery, expert assistance, and dealer training to support your smart and confident building decisions.  
                    </div>
                </motion.div>

            </div>

        </div>
        </>
    )
}