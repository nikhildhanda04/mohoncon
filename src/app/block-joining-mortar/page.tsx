import Navbar from "../components/common/navbar"
import Hero from "../components/common/hero"
import Info from "../components/bjm/info"
import TabInfo from "../components/bjm/tabinfo"
import Footer from "../components/common/footer"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function BlockJoiningMortar(){
    return(
        <>
        <div className="flex flex-col bg-white" >
            
            <div>
                <Navbar />
            </div>
            <div>
                <Hero />
            </div>
            <div>
                <Info />
            </div>
            <div>
                <TabInfo />
            </div>
                <div className="flex-col wbg flex items-center bg-white bg py-12">
                            <div className="font-primary font-extrabold text-primary/[0.08] px-68 text-9xl relative top-30 ">
                              PRODUCTS
                            </div>
                            <div className="font-primary text-blue-800 font-bold text-5xl px-68 text-white-800 ">
                               Check Other Products
                            </div>
                             <div className="relative w-290 h-112 mt-16">
                                            <Image 
                                            src="/infoaac.webp"
                                            alt="info"
                                            fill
                                            className="object-fill"
                                            />
                                        </div>
                            <div className="font-primary text-2xl mt-6 hover:bg-black hover:text-white transition-all duration-200 group bg-primary text-white px-6 py-3 rounded-lg w-fit mx-auto font-medium">
                                View <ArrowRight className="inline text-white group-hover:text-white"/>
                            </div>
                                </div>
            <div>
                <Footer />
            </div>

        </div>
        </>
    )
}