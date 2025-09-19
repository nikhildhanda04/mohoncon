import Image from "next/image"

export default function Info(){
    return(
        <>
                <div className="flex-col flex items-center bg-white py-12 ">
                    
        
                    <div className="font-primary font-extrabold text-primary/[0.08]  text-9xl relative top-30 ">
                       BLOCK JOINING MORTAR
                    </div>
                    <div className="font-primary font-bold text-5xl px-68 text-blue-800 ">
                        Block Joining Mortar
                    </div>
                    <div className="font-secondary font-light text-lg px-68 text-zinc-700 tracking-wide ">
                        Strong Bonds for a safer, stronger structure.
                    </div>
                    
                    <div className="relative w-290 h-200 mt-6">
                        <Image 
                        src="/blockmortor.webp"
                        alt="info"
                        fill
                        className="object-fill"
                        />
                    </div>
        
                    <div className="text-center  text-zinc-500 px-74 mt-6">
                       Mohancon’s Block Joining Mortar is a ready-to-use solution made especially for AAC blocks. It sticks blocks firmly together <br />
while using less material than traditional mortar.<br />
<br />
With faster drying, less shrinkage, and stronger bonds, it helps builders finish projects quicker and cleaner. 
                    </div>
                </div>
        </>
    )
}