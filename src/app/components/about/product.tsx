'use client'

import Image from "next/image"
import Link from "next/link"
import  {motion}  from 'framer-motion'

export default function Product(){
    return(
        <>
        <div className="flex-col flex items-center bg-white py-12 px-4 md:px-68">

            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, }}
            className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
               PRODUCTS
            </motion.div>
            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, }}
            className="font-primary font-bold text-2xl md:text-5xl text-blue-800 ">
                Our Products
            </motion.div>
            <motion.div
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, }}
            className="font-secondary text-center  font-light text-sm md:text-lg text-zinc-700 tracking-wide ">
                Smart materials that build better, faster, greener.
            </motion.div>

            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="flex flex-col-reverse md:flex-row mt-20">
                
                <div className="flex md:flex-2 flex-col gap-8 bg-primary px-9 pt-9 pb-16">

                    <div className="font-primary text-white text-xl md:text-4xl">
                        AAC Blocks 
                    </div>
                    <div className="font-secondary font-light text-white text-sm md:text-lg">
                        We manufacture strong, lightweight AAC blocks that are easy to use and better for the environment. They help build faster, reduce weight, and keep spaces cooler. 
                    </div>
                    <Link 
                    href="/aac-block"
                    className="px-4 md:px-16 text-xs md:text-base hover:bg-black hover:text-white transition-all duration-200 font-medium w-fit py-3 bg-white text-primary font-primary rounded-lg">
                        See More
                    </Link>
                    
                </div>
                <div className="relative w-100 h-60 md:w-180 md:h-112">
                    <Image 
                    src="/product1.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>

            </motion.div>

             <motion.div
             initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.2}}
             className="flex flex-col-reverse md:flex-row-reverse mt-20 mb-12">
                
                <div className="flex flex-2 flex-col gap-8 bg-primary px-9 pt-9 pb-16">

                    <div className="font-primary text-white text-xl md:text-4xl">
                         Joint Mortar Adhesive 
                    </div>
                    <div className="font-secondary font-light text-white text-sm md:text-lg">
                       We manufacture strong, lightweight AAC blocks that are easy to use and better for the environment. They help build faster, reduce weight, and keep spaces cooler. 
                    </div>
                    <Link 
                    href="/block-joining-mortar"
                    className="px-4 md:px-16 text-xs md:text-base hover:bg-black hover:text-white transition-all duration-200 font-medium w-fit py-3 bg-white text-primary font-primary rounded-lg">
                        See More
                    </Link>
                    
                </div>
                <div className="relative w-100 h-60 md:w-180 md:h-112">
                    <Image 
                    src="/product2.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>

            </motion.div>


        </div>
        </>
    )
}