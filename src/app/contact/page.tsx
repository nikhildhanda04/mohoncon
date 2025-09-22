import Hero from "../components/common/hero";
import Navbar from "../components/common/navbar";
import ContactForm from "../components/contact/contactForm";
import { Metadata } from "next";
import Queries from "../components/contact/queries";
import Footer from "../components/common/footer";

export const metadata: Metadata = {
    title: "Contact Us | Mohoncon Builds",
    description: "Get in touch with Mohoncon Builds for inquiries, support, or more information about our AAC blocks and construction solutions. We're here to help you build better.",
}
export default function Contact() {
  return (
      <>
      <div className="flex flex-col overflow-clip">

        <div className="z-99">
        <Navbar />
        </div>


        <div>
          <Hero />
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <Queries />
        </div>
        <div>
          <Footer />
        </div>

      </div>
      </>
  );
}
