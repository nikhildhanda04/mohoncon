import Hero from "../components/common/hero";
import Navbar from "../components/common/navbar";
import ContactForm from "../components/contact/contactForm";
import Queries from "../components/contact/queries";
import Footer from "../components/common/footer";

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
