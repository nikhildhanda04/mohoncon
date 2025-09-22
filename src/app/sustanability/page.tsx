import Navbar from "../components/common/navbar"
import Hero from "../components/common/hero"
import { Metadata } from "next"
import Info from "../components/sustainability/info"
import Footer from "../components/common/footer"

export const metadata: Metadata = {
    title: "Sustainability | Mohoncon Builds",
    description: "Learn about our commitment to sustainability and eco-friendly practices at Mohoncon Builds. Discover how we minimize environmental impact through innovative construction methods and materials.",
}

export default function Sustainability(){
    return(
        <>
        <div className="flex flex-col overflow-clip">
            
            <Navbar/>

            <div>
                <Hero />
            </div>
            <div>
                <Info />
            </div>
            <div>
                <Footer />
            </div>
           

        </div>
        </>
    )
}