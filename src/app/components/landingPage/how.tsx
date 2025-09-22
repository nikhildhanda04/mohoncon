'use client'

import {Play} from 'lucide-react'
import Image from 'next/image'
import "./how.css"
import {motion} from 'framer-motion'

export default function How(){
    return(
        <>
        <div className="bg-primary/[0.5] grid-cols-1 grid md:grid-cols-3 items-center py-12 bg">


        <motion.div 
        initial = {{ x:-20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
        className='relative hidden md:block w-70 h-40 justify-self-end'>
            <Image 
            src="/brickleft.webp"
            alt=""
            fill
            className="object-cover"
            />
        </motion.div>
        <motion.div 
        initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
        className="flex flex-col items-center gap-12">

            <div className="font-primary text-white font-bold text-2xl md:text-5xl text-center">
                How Blocks Are Made?
            </div>
            <div className="font-primary text-white text-base md:text-xl text-center">
                 AAC blocks are a smart, eco-friendly choice for building. <br />
                <br />
                Made from OPC 53 cement, fly ash, lime, gypsum, and aluminum powder, they are steam-cured for strength. <br />
                    <br />
                At Mohancon, we make high-quality AAC blocks designed for today’s construction needs. 
            </div>
            <button className="font-secondary items-center font-bold bg-white hover:bg-black hover:text-white text-zinc-700 shadow-lg rounded-lg w-fit px-3 md:px-9 py-1 md:py-4 md:text-3xl">
                Play Video <span className='bg-primary text-white px-2 md:px-3 md:py-1 rounded-full'><Play size="30" fill="white" className=' hidden md:inline'/><Play size="10" fill="white" className=' md:hidden inline '/></span> 
            </button>

        </motion.div>
        <motion.div 
        initial = {{ x:-50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ x:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
        className='relative hidden md:block w-80 h-80'>
            <Image 
            src="/brickright.webp"
            alt=""
            fill
            className="object-cover"
            />

        </motion.div>

        </div>
        </>
    )
}