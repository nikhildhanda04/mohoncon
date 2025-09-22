'use client'
import Navbar from "../components/common/navbar"
import { Metadata } from "next"
import Hero from "../components/common/hero"
import Info from "../components/aac/info"
import TabInfo from "../components/aac/tabInfo"
import { motion } from 'framer-motion'
import Link from "next/link"
import Footer from "../components/common/footer"
import "../components/aac/tab.css"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "AAC Blocks | Mohoncon Builds",
    description: "Explore Mohoncon Builds' high-quality AAC blocks, designed for superior insulation, lightweight construction, and sustainability. Ideal for residential and commercial projects, our AAC blocks offer excellent thermal performance and ease of installation.",
}

export default function AACBlock(){
    return(
        <>
        <div className="flex flex-col bg-white overflow-clip">

            <div>
                <Navbar />
            </div>
            <div>
                <Hero />
            </div>
            <div>
                <Info />
            </div>
            <TabInfo />
            <div>
                <div className="flex-col wbg flex items-center bg-white bg py-12">
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-primary font-extrabold text-primary/[0.08] px-68 text-9xl relative top-30 ">
              PRODUCTS
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.1}}
            className="font-primary text-blue-800 font-bold text-lg md:text-5xl md:px-68 text-white-800 ">
               Check Other Products
            </motion.div>
            <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.3}}
            className="relative w-120 h-100 md:w-260 md:h-200">
                <Image 
                src="/blockmortor.webp"
                alt=""
                fill
                className="object-fill"
                />
            </motion.div>
            <Link 
            href="/block-joining-mortar"
            >
             <motion.div 
            initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.4}}
            className="font-primary text-lg md:text-2xl hover:bg-black hover:text-white transition-all duration-200 group bg-primary text-white px-3 md:px-6 py-1 md:py-3 rounded-lg w-fit mx-auto font-medium">
                View <ArrowRight className="inline text-white group-hover:text-white"/>
            </motion.div>
            </Link>
           
                </div>
                <Footer />
            </div>
            
        </div>
        </>
    )
}