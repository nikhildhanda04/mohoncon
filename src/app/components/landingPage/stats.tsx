'use client'
import { motion } from 'framer-motion'
export default function Stats(){
    return(
        <>
        <motion.div 
        initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7,}}
        className="bg-white justify-center md:mx-auto flex flex-row border-b border-primary mx-5 z-78 py-3 md:py-7 leading-1 overflow-hidden shadow-lg px-1 md:px-6 rounded-lg w-fit">

            <div className="font-primary text-primary text-center border-r border-zinc-800 leading-8  font-bold text-3xl md:text-6xl px-2 md:px-6">

                10+ <br/> <span className="text-zinc-700 font-normal leading-4  text-base md:text-2xl text-center">Years of Expertise</span>

            </div>

                        <div className="font-primary text-primary leading-8  text-center border-r border-zinc-800 font-bold text-3xl md:text-6xl px-2 md:px-6">

                100+ <br/> <span className="text-zinc-700 font-normal leading-4  text-base md:text-2xl text-center">Happy Customers</span>

            </div>

                        <div className="font-primary text-primary leading-8  text-center font-bold text-3xl md:text-6xl px-2 md:px-6">

                10+ <br/> <span className="text-zinc-700 font-normal leading-4  text-base md:text-2xl text-center">Residential Projects</span>

            </div>

        </motion.div>
        </>
    )
}