import Navbar from "../components/common/navbar";
import Hero from "../components/common/hero";
import Info from "../components/about/info";
import Story from "../components/about/story";
// import Manufacturing from "../components/about/manufacturing";
import { Metadata } from "next";
import Whyus from "../components/about/whyus";
import ContactForm from "../components/landingPage/contactForm";
import Product from "../components/about/product";
import Footer from "../components/common/footer";

export const metadata: Metadata = {
    title: "About Us | Mohoncon Builds",
    description: "Learn about Mohoncon Builds, a leading provider of AAC blocks and construction solutions. Discover our mission, values, and commitment to quality and sustainability in building materials.",
}

export default function About(){
    return(
        <>
        <div className="flex flex-col bg-white overflow-clip">

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
                <Story />
            </div>
            {/* <div>
                <Manufacturing />
            </div> */}
            <div>
                <Whyus />
            </div>
            <div>
                <ContactForm />
            </div>
            <div>
                <Product />
            </div>


            
            <div>
                <Footer />
            </div>
            
        </div>
        </>
    )
}