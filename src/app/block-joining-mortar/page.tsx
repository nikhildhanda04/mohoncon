'use client'

import Link from "next/link"
import Navbar from "../components/common/navbar"

import Hero from "../components/common/hero"
import Info from "../components/bjm/info"
import TabInfo from "../components/bjm/tabinfo"
import Footer from "../components/common/footer"
import { motion } from 'framer-motion'
import Image from "next/image"
import { ArrowRight } from "lucide-react"



export default function BlockJoiningMortar(){
    return(
        <>
        <div className="flex flex-col bg-white overflow-clip" >
            
            <div>
                <Navbar />
            </div>
            <div>
                <Hero />
            </div>
            <div>
                <Info />
            </div>
            <div>
                <TabInfo />
            </div>
                <div className="flex-col wbg flex items-center bg-white bg py-12">
                            <motion.div 
                                                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                            className="font-primary font-extrabold text-primary/[0.08] px-68 text-9xl relative top-30 ">
                              PRODUCTS
                            </motion.div>
                            <motion.div
                                                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                            className="font-primary text-blue-800 font-bold text-lg md:text-5xl px-4 md:px-68 text-white-800 ">
                               Check Other Products
                            </motion.div>
                             <motion.div 
                                                 initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                             className="relative w-100 h-40 md:w-290 md:h-112 mt-16">
                                            <Image 
                                            src="/infoaac.webp"
                                            alt="info"
                                            fill
                                            className="object-fill"
                                            />
                                        </motion.div>
                                        <Link
                                        href="/aac-block"
                                        >
                                         <motion.div 
                                                initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7}}
                            className="font-primary text-sm md:text-2xl mt-6 hover:bg-black hover:text-white transition-all duration-200 group bg-primary text-white px-3 md:px-6 py-1 md:py-3 rounded-lg w-fit mx-auto font-medium">
                                View <ArrowRight className="inline text-white group-hover:text-white"/>
                            </motion.div>
                                        </Link>
                           
                                </div>
            <div>
                <Footer />
            </div>

        </div>
        </>
    )
}