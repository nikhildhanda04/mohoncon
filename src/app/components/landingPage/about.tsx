import Image from "next/image"
export default function About(){
    return(
        <>
        <div className="flex-col flex items-center py-12 bg-white px-68">

            <div className="font-primary font-extrabold text-primary/[0.08] text-9xl relative top-30 ">
                ABOUT
            </div>
            <div className="font-primary font-bold text-5xl text-blue-800 ">
                About Us
            </div>
            <div className="font-secondary font-light text-lg text-zinc-700 tracking-wide ">
                Smart material that builds better, faster, greener.
            </div>

            <div className="grid grid-cols-2 gap-2 px-32 mt-24">

                <div className="relative w-full">
                    <Image 
                    src="/about.webp"
                    alt="About Us"
                    fill
                    className="obejct-cover"
                    />
                </div>
                <div className="font-primary items-top  text-zinc-900 px-12 pb-36">
                 At Mohancon Builds, we believe that building the future starts with better choices today. <br />

                 <br />

                We are committed to changing the way India builds by offering construction materials that are not only stronger and smarter, but also kinder to the planet. <br />
                 <br />
                We make AAC blocks and Block Joining Mortar that are light, strong, energy-saving, and better for the environment. <br />
                 <br />
                Our mission is simple but powerful. We aim to build every project with care, quality, and a clear purpose that lasts for years to come.  <br />

                <button className="bg-primary px-7 py-2 text-white rounded-lg text-xl font-primary font-medium mt-20">
                    Know More
                </button>
                </div>
                 
            </div>

        </div>
        </>
    )
}