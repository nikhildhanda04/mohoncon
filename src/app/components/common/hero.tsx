import Image from "next/image"

export default function Hero() {
    return(
        <>
        <div className="flex flex-col px-68 justify-center h-[90vh] py-28">

            <div className="absolute top-0 left-0 z-1 w-full h-[90vh]">
                <Image
                src="/bannerr.webp"
                alt=""
                fill
                className="object-cover"
                />
            </div>

            <div className="font-primary font-bold z-89 text-7xl text-left">
                 We Prepare <br/> For The Future 
            </div>
            <div className="font-secondary font-lg z-89 font-medium text-zinc-700">
                With lasting materials and sustainable solutions, <br /> we shape a better India. 
            </div>

        </div>
        </>
    )
}