import Image from "next/image"
import { Instagram, Facebook } from 'lucide-react'

export default function ContactForm(){
    return(
        <>
        <div className="bg-stone-200 w-full py-36 px-68">

            <div className="flex flex-row w-full justify-center">

                <div className="relative w-[25vw] z-99 ">
                    <Image 
                    src="/contect.webp"
                    alt=""
                    fill
                    className="object-cover rounded-l-lg"
                    />
                </div>
                <form className="flex rounded-lg font-primary text-white flex-col gap-10 bg-primary p-8">

                    <div className="font-bold text-4xl">
                        Get In Touch
                    </div>
                    <div className="flex flex-row gap-28">

                        <div className="flex flex-col">

                            <div className="text-2xl">
                                First Name
                            </div>
                            <input 
                            placeholder="Enter Your First Name"
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left"
                            />

                        </div>
                        <div className="flex flex-col">

                            <div className="text-2xl">
                                Last Name
                            </div>
                            <input 
                            placeholder="Enter Your Last Name"
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left"
                            />

                        </div>

                    </div>

                      <div className="flex flex-row gap-28">

                        <div className="flex flex-col">

                            <div className="text-2xl">
                                First Name
                            </div>
                            <input 
                            placeholder="Enter Your First Name"
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left"
                            />

                        </div>
                        <div className="flex flex-col">

                            <div className="text-2xl">
                                Last Name
                            </div>
                            <input 
                            placeholder="Enter Your Last Name"
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left"
                            />

                        </div>

                    </div>

                        <div className="flex flex-col">

                            <div className="text-2xl">
                                Last Name
                            </div>
                            <input 
                            placeholder="Enter Your Last Name"
                            className="text-base active:none active:outline:none border-b border-white py-2 text-left"
                            />

                        </div>

                        <button className="text-primary px-5 py-3 rounded-lg w-fit hover:bg-black hover:text-white transition-all duration-200 bg-white ">
                            Get A Quote
                        </button>

                    <div className="flex flex-col items-end gap-1">

                    <div className="text-white">
                        Follow us on
                    </div>
                    <div className="flex flex-row gap-3">

                        <div className="bg-white p-1 rounded-full">
                            <Instagram color="#299191"/>
                        </div>
                        <div className="bg-white p-1 rounded-full">
                            <Facebook color="#299191"/>
                        </div>

                    </div>

                </div>


                </form>



            </div>

        </div>
        </>
    )
}