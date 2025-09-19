import Image from "next/image"

export default function ContactForm(){
    return(
        <>
        <div className="flex flex-row mx-84 mt-36 jusitfy-between rounded-xl bg-[#c1ccdb]">

                <div className="relative w-200 h-98">
                    <Image
                    src="/contactform.webp"
                    alt="fire"
                    className="object-cover group-hover:brightness-0 group-hover:invert"
                    fill
                    />
                </div>

            <div className="flex flex-col text-center px-20 py-12 ">

                <div className="font-primary text-5xl font-bold text-gray-800 ">
                    We are just a click away!
                </div>
                <div className="font-primary text-xl font-medium text-gray-800">
                    Let’s build something strong together 
                </div>
                <form className="grid grid-cols-3 gap-4 mt-12"> 

                    <input 
                    placeholder="Name"
                    className="py-4 px-3 rounded-md text-primary font-primary  bg-white"
                    />
                    <input 
                    placeholder="Mobile no"
                    className="py-4 px-3 rounded-md text-primary font-primary bg-white"
                    />
                    <input 
                    placeholder="Location"
                    className="py-4 px-3 rounded-md text-primary font-primary bg-white"
                    />
                    <input 
                    placeholder="Quantity"
                    className="py-4 px-3 rounded-md text-primary font-primary  bg-white"
                    />                    
                    <input 
                    placeholder="Blocks"
                    className="py-4 px-3 rounded-md text-primary font-primary  bg-white"
                    />
                    <button className="py-4 px-3 hover:bg-black rounded-md text-white font-primary  bg-primary">
                        Enquire Now
                    </button>

                </form>

            </div>

        </div>
        </>
    )
}