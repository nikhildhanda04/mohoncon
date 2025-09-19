import Image from "next/image"

export default function Products(){
    return(
        <>
        <div className="flex flex-col items-center bg-white py-20 px-68">

            <div className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
                PRODUCTS
            </div>
            <div className="font-primary font-bold text-5xl text-blue-800 ">
                Our Products
            </div>
            <div className="font-secondary font-light text-lg text-zinc-700 tracking-wide ">
                Smart material that builds better, faster, greener.
            </div>

            <div className="grid grid-cols-2 mt-20 gap-8">

                <div className="relative w-full ">
                    <Image 
                    src="/prod1.webp"
                    alt="AAC BLOCKS"
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="bg-primary gap-12 px-28 py-42 font-primary items-center flex flex-col justify-center">

                    <div className="font-primary text-5xl font-semibold underline underline-offset-8 text-white ">
                        AAC BLOCKS
                    </div>
                    <div className="text-center font-primary font-light text-white text-2xl">
                        We manufacture strong, lightweight AAC blocks that are easy to use and better for the environment. They help build faster, reduce weight, and keep spaces cooler. 
                    </div>
                    <button className="bg-white font-primarty hover:bg-black hover:text-white transtion-all duration-200 text-primary px-12 py-3 rounded-lg">
                        See More
                    </button>

                </div>

                <div className="bg-[#a6ce38] text-center gap-12 px-28 py-42 font-primary items-center flex flex-col justify-center">

                    <div className="font-primary text-5xl font-semibold underline underline-offset-8 text-black ">
                         Block Joining Mortar
                    </div>
                    <div className="text-center font-primary font-light text-black text-2xl">
                       We make ready-to-use block joining mortar for faster and stronger construction. It gives a firm grip, reduces waste, and saves time. 
                    </div>
                    <button className="bg-white font-primarty hover:bg-black hover:text-white transtion-all duration-200 text-primary px-12 py-3 rounded-lg">
                        See More
                    </button>

                </div>

                <div className="relative w-full">
                    <Image 
                    src="/prod2.webp"
                    alt="AAC BLOCKS"
                    fill
                    className="object-cover"
                    />
                </div>

            </div>

        </div>
        </>
    )
}