'use client'

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import {motion} from 'framer-motion'

export default function Sustain(){
    return(
        <>
        <div className="flex-col flex items-center bg-white py-12 px-4 md:px-68">

            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
                SUSTAINABILITY
            </motion.div>
            <motion.div
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-primary font-bold text-2xl md:text-5xl text-blue-800 ">
                Green & Sustainability 
            </motion.div>
            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
            className="font-secondary font-light text-sm text-center md:text-lg text-zinc-700 tracking-wide ">
                What we stand for, is what we deliver.
            </motion.div>

            <motion.div 
            initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
            className="font-secondary font-light text-xs md:text-sm text-center mt-16 md:px-16 text-zinc-700">
                 We are committed to creating eco-friendly building solutions that minimize environmental impact at every stage, from sourcing sustainable raw materials to manufacturing energy-efficient products.<br />
                 <br />
                Our focus on green technology and waste reduction helps builders create structures that are not only strong and durable but also contribute to a healthier planet for future generations.

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">

                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5,}}
                className="group flex flex-col hover:bg-primary items-center text-center gap-4 shadow-[3px_3px_12px_0px_rgba(0,0,0,0.3)] rounded-lg py-8 px-6">
                <div className="relative w-25 h-25">
                    <Image
                    src="/fire.svg"
                    alt="fire"
                    className="object-cover group-hover:brightness-0 group-hover:invert"
                    fill
                    />
                </div>
                <div className="text-xl group-hover:text-white font-secondary font-medium">
                    Fire-Resistant
                </div>
                <div className="text-sm font-secondary font-light text-zinc-600 group-hover:text-white">
                    We ensure enhanced safety by manufacturing products that offer excellent fire resistance.
                </div>
                <button className="bg-primary group-hover:bg-white p-5 mt-6 rounded-lg">
                    <ArrowUpRight className="group-hover:text-primary text-white"/>
                </button>
                </motion.div>
                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.2}}
                className="group flex flex-col hover:bg-primary items-center text-center gap-4 shadow-[3px_3px_12px_0px_rgba(0,0,0,0.3)] rounded-lg py-8 px-6">
                <div className="relative w-35 h-25">
                    <Image
                    src="/uparrow.svg"
                    alt="fire"
                    className="object-cover group-hover:brightness-0 group-hover:invert"
                    fill
                    />
                </div>
                <div className="text-xl group-hover:text-white font-secondary font-medium">
                    Soundproof
                </div>
                <div className="text-sm font-secondary font-light text-zinc-600 group-hover:text-white">
                   Our products provide effective soundproofing, creating quiter and more comfertable spaces.
                </div>
                <button className="bg-primary group-hover:bg-white p-5 mt-6 rounded-lg">
                    <ArrowUpRight className="group-hover:text-primary text-white"/>
                </button>
                </motion.div>
                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.3}}
                className="group flex flex-col hover:bg-primary items-center text-center gap-4 shadow-[3px_3px_12px_0px_rgba(0,0,0,0.3)] rounded-lg py-8 px-6">
                <div className="relative w-25 h-25">
                    <Image
                    src="/drop.svg"
                    alt="fire"
                    className="object-cover group-hover:brightness-0 group-hover:invert"
                    fill
                    />
                </div>
                <div className="text-xl group-hover:text-white font-secondary font-medium">
                    Water Saving
                </div>
                <div className="text-sm font-secondary font-light text-zinc-600 group-hover:text-white">
                    Only the joints need water during construction, so consumption of water is low.
                </div>
                <button className="bg-primary group-hover:bg-white p-5 mt-6 rounded-lg">
                    <ArrowUpRight className="group-hover:text-primary text-white"/>
                </button>
                </motion.div>
                <motion.div 
                initial = {{ y:20, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.5, delay:0.4}}
                className="group flex flex-col hover:bg-primary items-center text-center gap-4 shadow-[3px_3px_12px_0px_rgba(0,0,0,0.3)] rounded-lg py-8 px-6">
                <div className="relative w-25 h-25">
                    <Image
                    src="/box-1.svg"
                    alt="fire"
                    className="object-cover group-hover:brightness-0 group-hover:invert"
                    fill
                    />
                </div>
                <div className="text-xl group-hover:text-white font-secondary font-medium">
                    Energy Efficient
                </div>
                <div className="text-sm font-secondary font-light text-zinc-600 group-hover:text-white">
                    Our material offer high thermal insualtion, cutting heating and cooling costs.
                </div>
                <button className="bg-primary group-hover:bg-white p-5 mt-6 rounded-lg">
                    <ArrowUpRight className="group-hover:text-primary text-white"/>
                </button>
                </motion.div>

            </div>

            

        </div>
        </>
    )
}