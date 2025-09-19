import Image from "next/image"

export default function Product(){
    return(
        <>
        <div className="flex-col flex items-center bg-white py-12 px-68">

            <div className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
               PRODUCTS
            </div>
            <div className="font-primary font-bold text-5xl text-blue-800 ">
                Our Products
            </div>
            <div className="font-secondary font-light text-lg text-zinc-700 tracking-wide ">
                Smart materials that build better, faster, greener.
            </div>

            <div className="flex flex-row mt-20">
                
                <div className="flex flex-2 flex-col gap-8 bg-primary px-9 pt-9 pb-16">

                    <div className="font-primary text-white text-4xl">
                        AAC Blocks 
                    </div>
                    <div className="font-secondary font-light text-white text-lg">
                        We manufacture strong, lightweight AAC blocks that are easy to use and better for the environment. They help build faster, reduce weight, and keep spaces cooler. 
                    </div>
                    <button className="px-16 hover:bg-black hover:text-white transition-all duration-200 font-medium w-fit py-3 bg-white text-primary font-primary rounded-lg">
                        See More
                    </button>
                    
                </div>
                <div className="relative w-180 h-112">
                    <Image 
                    src="/product1.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>

            </div>

             <div className="flex flex-row-reverse mt-20 mb-12">
                
                <div className="flex flex-2 flex-col gap-8 bg-primary px-9 pt-9 pb-16">

                    <div className="font-primary text-white text-4xl">
                         Joint Mortar Adhesive 
                    </div>
                    <div className="font-secondary font-light text-white text-lg">
                       We manufacture strong, lightweight AAC blocks that are easy to use and better for the environment. They help build faster, reduce weight, and keep spaces cooler. 
                    </div>
                    <button className="px-16 hover:bg-black hover:text-white transition-all duration-200 font-medium w-fit py-3 bg-white text-primary font-primary rounded-lg">
                        See More
                    </button>
                    
                </div>
                <div className="relative w-180 h-112">
                    <Image 
                    src="/product2.webp"
                    alt=""
                    fill
                    className="object-fill"
                    />
                </div>

            </div>


        </div>
        </>
    )
}