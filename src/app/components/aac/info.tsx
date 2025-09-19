import Image from "next/image"

export default function Info(){
    return(
        <>
        <div className="flex-col flex items-center bg-white py-12 ">
            

            <div className="font-primary font-extrabold text-primary/[0.08] px-68 text-9xl relative top-30 ">
               AAC BLOCKS
            </div>
            <div className="font-primary font-bold text-5xl px-68 text-blue-800 ">
                Autoclaved Aerated Concrete Blocks-(AAC)
            </div>
            <div className="font-secondary font-light text-lg px-68 text-zinc-700 tracking-wide ">
                Strong Foundations for a Better Future
            </div>
            
            <div className="relative w-290 h-112 mt-16">
                <Image 
                src="/infoaac.webp"
                alt="info"
                fill
                className="object-fill"
                />
            </div>

            <div className="text-center  text-zinc-500 px-74 mt-20">
                At Mohancon Builds, we make AAC blocks that are strong, light, and good for the environment. Made using a precise blend of OPC 53 cement, lime, sand, gypsum, and aluminum powder, our blocks are cured using high-pressure steam, resulting in a durable and thermally efficient product. <br />
                <br />
                These blocks reduce building weight and provide excellent insulation, making structures cooler, safer, and more energy-efficient, all while speeding up construction with their precision and ease of use. <br />
                <br />
                With every block we produce, we stay committed to delivering reliability, workability, and sustainability, building materials that support a greener tomorrow and simplify the way India builds today. 
            </div>

            

        </div>
        </>
    )
}