import Navbar from "../components/common/navbar"
import Hero from "../components/common/hero"
import Info from "../components/sustainability/info"
import Footer from "../components/common/footer"


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