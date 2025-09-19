import Image from "next/image"
export default function Whyus(){
    return(
        <>
        <div className="flex-col flex items-center bg-white pt-12 px-68">

            <div className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
              MOHONCON
            </div>
            <div className="font-primary font-bold text-5xl text-blue-800 ">
                Why Choose Us
            </div>
            <div className="font-secondary font-light text-lg text-zinc-700 tracking-wide ">
                Quality, innovation, and trust: building excellence with every block
            </div>

            <div className="grid grid-cols-2 gap-12 mt-12 px-12">

                <div className="flex flex-col items-start gap-4">
                    <div className="relative w-18 h-20">
                        <Image 
                        src="/why1.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-3xl font-primary ">
                        Quality Assurances 
                    </div>
                    <div className="font-secondary font-light text-zinc-600">
                        Every product undergoes in-house inspection to verify its strength, accuracy, and compliance with industry standards. 
                    </div>
                </div>

                                <div className="flex flex-col items-start gap-4">
                    <div className="relative w-18 h-20">
                        <Image 
                        src="/why2.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-3xl font-primary ">
                        Competitive Advantages
                    </div>
                    <div className="font-secondary font-light text-zinc-600">
                       Our precision-engineered AAC blocks and mortar are lighter and faster to install, and built for long-term performance. 
                    </div>
                </div>

                                <div className="flex flex-col items-start gap-4">
                    <div className="relative w-28 h-20">
                        <Image 
                        src="/why3.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-3xl font-primary font-light">
                        Faster Construction Times 
                    </div>
                    <div className="font-secondary font-light text-zinc-600">
                        Our precision-cut blocks and ready-to-use mortar speed up construction, reduce waste, and ease site handling. 
                    </div>
                </div>

                                <div className="flex flex-col items-start gap-4">
                    <div className="relative w-20 h-20">
                        <Image 
                        src="/why4.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-3xl font-primary font-light">
                       Green & Sustainable 
                    </div>
                    <div className="font-secondary font-light text-zinc-600">
                        Our products are made using eco-friendly materials and processes that save water, energy, and reduce environmental impact. 
                    </div>
                </div>

                                <div className="flex flex-col items-start gap-4">
                    <div className="relative w-20 h-20">
                        <Image 
                        src="/why5.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-3xl font-primary font-light">
                        Cost Efficient 
                    </div>
                    <div className="font-secondary font-light text-zinc-600">
                       Our AAC blocks are 9x bigger than red bricks, using 66% less mortar. Their light weight reduces structural load, cutting costs on steel, cement, and energy. 
                    </div>
                </div>

                                <div className="flex flex-col items-start gap-4">
                    <div className="relative w-24 h-20">
                        <Image 
                        src="/why6.webp"
                        alt=""
                        fill
                        className="object-fill"
                        />
                    </div>
                    <div className="text-primary text-3xl font-primary font-light">
                        Support & After Sales Service 
                    </div>
                    <div className="font-secondary font-light text-zinc-600">
                      On time delivery, expert assistance, and dealer training to support your smart and confident building decisions.  
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}