import Tabs from "../common/tabs";

export default function TabInfo() {
  const tabs = [
    { id: "benefits", label: "BENEFITS" },
    { id: "technical", label: "TECHNICAL SPECIFICATIONS" },
    { id: "sizes", label: "SIZES OFFERED" },
    { id: "use-cases", label: "IDEAL USE CASES" },
    { id: "faqs", label: "FAQS" },
  ];

  return (
    <main>
      <Tabs tabs={tabs} />

      <section id="benefits" className="min-h-screen p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Benefits</h2>
        <p>Content for Benefits...</p>
      </section>

      <section id="technical" className="min-h-screen p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
        <p>Content for Technical...</p>
      </section>

      <section id="sizes" className="min-h-screen p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Sizes Offered</h2>
        <p>Content for Sizes...</p>
      </section>

      <section id="use-cases" className="min-h-screen p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Ideal Use Cases</h2>
        <p>Content for Use Cases...</p>
      </section>

      <section id="faqs" className="min-h-screen p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">FAQs</h2>
        <p>Content for FAQs...</p>
      </section>
    </main>
  );
}
