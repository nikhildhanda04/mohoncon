import Image from "next/image"

export default function Story(){
    return(
        <>
        <div className="flex-col flex items-center bg-gray-100 py-12 px-68">

             <div className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
               FOUNDER
            </div>
            <div className="font-primary font-bold text-5xl text-blue-800 ">
               Founding Story
            </div>
            <div className="font-secondary font-light text-lg text-zinc-700 tracking-wide ">
                From Vision to Reality
            </div>           

            <div className="text-center font-secondary text-zinc-600 mt-20 px-20">
                Some journeys start with a dream, others with a legacy. For Pranjal Ralhan, “Mohancon Builds” is both. The company is named in honor of his grandfather, Late Mr. Mohan Lal Ralhan, who was his and his father’s greatest inspiration.<br/> 
                <br />

                Growing up around blueprints and building blocks, he inherited not just the knowledge, but the passion to create something meaningful. With his father’s 2.5 decades of experience in the construction industry, he was driven to take that legacy forward with purpose and innovation.<br />
                <br />
                This vision laid the foundation for Mohancon Builds., now recognized as India’s most trusted brand for AAC Blocks and Block Joining Mortar.
                </div>

                <div className="flex flex-row mt-24 gap-16">

                    <div className="flex flex-col gap-4 items-center">

                        <div className="font-primary text-zinc-700 font-bold text-3xl">
                            2005
                        </div>
                        <div className="font-secondary  text-center font-light text-base text-zinc-600">
                            The foundation was laid when Mr. Pranjal’s father started his construction and real estate business. 
                        </div>
                        <div className="relative w-30 mt-4 h-32 bg-white rounded-b-full border-t-5 border-primary">
                            <Image 
                            src="/1.webp"
                            alt=""
                            fill
                            className="object-cover p-8"
                            />
                        </div>
                        <div className="font-primary text-primary font-bold text-6xl text-center">
                            01
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-4 items-center">

                        <div className="font-primary text-zinc-700 font-bold text-3xl">
                            2005
                        </div>
                        <div className="font-secondary mt-4 text-center font-light text-base text-zinc-600">
                            He further expanded into raw materials by launching a stone crushing business.
                        </div>
                        <div className="relative w-30 h-32 bg-white rounded-t-full border-b-5 border-primary">
                            <Image 
                            src="/2.webp"
                            alt=""
                            fill
                            className="object-cover p-8"
                            />
                        </div>
                        <div className="font-primary text-primary font-bold text-6xl text-center">
                            02
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center">

                        <div className="font-primary text-zinc-700 font-bold text-3xl">
                            Early Years 
                        </div>
                        <div className="font-secondary text-center font-light text-base text-zinc-600">
                            Mr. Pranjal’s experience in China and Mumbai inspired him to bring new construction technology to Madhya Pradesh. 
                        </div>
                        <div className="relative w-30 mt-4 h-32 bg-white rounded-b-full border-t-5 border-primary">
                            <Image 
                            src="/3.webp"
                            alt=""
                            fill
                            className="object-cover p-8"
                            />
                        </div>
                        <div className="font-primary text-primary font-bold text-6xl text-center">
                            03
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-4 items-center">

                        <div className="font-primary text-zinc-700 font-bold text-3xl">
                            2005
                        </div>
                        <div className="font-secondary text-center mt-4 font-light text-base text-zinc-600">
                            Under the guidance of his father, Mr. Pranjal launched Mohancon Builds, starting a new era in sustainable construction. 
                        </div>
                        <div className="relative w-30 h-32 bg-white rounded-t-full border-b-5 border-primary">
                            <Image 
                            src="/4.webp"
                            alt=""
                            fill
                            className="object-cover p-8"
                            />
                        </div>
                        <div className="font-primary text-primary font-bold text-6xl text-center">
                            04
                        </div>
                    </div>

                    

                </div>

        </div>
        </>
    )
}