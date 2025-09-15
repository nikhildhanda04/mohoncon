import Hero from "./components/hero";
import Navbar from "./components/common/navbar";

export default function Home() {
  return (
      <>
      <div className="flex flex-col">

        <div>
        <Navbar />
        </div>


        <div>
          <Hero />
        </div>

      </div>
      </>
  );
}
