import {Play} from 'lucide-react'
import Image from 'next/image'
import "./how.css"

export default function How(){
    return(
        <>
        <div className="bg-primary/[0.5] grid grid-cols-3 items-center py-12 bg">


        <div className='relative w-70 h-40 justify-self-end'>
            <Image 
            src="/brickleft.webp"
            alt=""
            fill
            className="object-cover"
            />
        </div>
        <div className="flex flex-col items-center gap-12">

            <div className="font-primary text-white font-bold text-5xl text-center">
                How Blocks Are Made?
            </div>
            <div className="font-primary text-white text-xl text-center">
                 AAC blocks are a smart, eco-friendly choice for building. <br />
                <br />
                Made from OPC 53 cement, fly ash, lime, gypsum, and aluminum powder, they are steam-cured for strength. <br />
                    <br />
                At Mohancon, we make high-quality AAC blocks designed for today’s construction needs. 
            </div>
            <button className="font-secondary items-center font-bold bg-white hover:bg-black hover:text-white text-zinc-700 shadow-lg rounded-lg w-fit px-9 py-4 text-3xl">
                Play Video <span className='bg-primary text-white px-3 py-1 rounded-full'><Play size="30" fill="white" className='inline'/></span> 
            </button>

        </div>
        <div className='relative w-80 h-80'>
            <Image 
            src="/brickright.webp"
            alt=""
            fill
            className="object-cover"
            />

        </div>

        </div>
        </>
    )
}