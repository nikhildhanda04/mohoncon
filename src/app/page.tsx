import Navbar from "./components/common/navbar";
import Hero from "./components/common/hero";
import Stats from "./components/landingPage/stats";
import Products from "./components/landingPage/products";
import About from "./components/landingPage/about";
import How from "./components/landingPage/how";
import Sustain from "./components/landingPage/sustain";
import Promise from "./components/landingPage/promise";
import ContactForm from "./components/landingPage/contactForm";
import Footer from "./components/common/footer";
export default function Home() {
  return (
      <>
      <div className="flex flex-col bg-white">

        <div className="z-99">
          <Navbar />
        </div>

        <div>
          <Hero />
          <div className="relative -top-20 z-99">
          <Stats />
          </div>
        </div>
        <div className="relative -top-45 z-89">
          <Products />
        </div>
        <div className="relative -top-45 z-89">
          <About />
        </div>
        <div className="relative -top-45 z-89">
          <How />
        </div>
        <div className="relative -top-45 z-89">
          <Sustain />
        </div>
        <div className="relative -top-45 z-89">
        <Promise />
        </div>
        <div className="relative -top-45 z-89">
          <ContactForm />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
      </>
  );
}
