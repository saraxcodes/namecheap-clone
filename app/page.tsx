import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductTabs from "@/components/ProductTabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductTabs />
        
        {/* Trusted Section */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#404040]">Trusted the world over</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
              <span className="text-2xl font-bold">FIGMA</span>
              <span className="text-2xl font-bold">IMGUR</span>
              <span className="text-2xl font-bold">PRIVACY</span>
              <span className="text-2xl font-bold">BUFFER</span>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-[#404040]">Every step to online success</h2>
              <p className="text-lg text-gray-600 mb-8">
                Register a domain name and create your online identity. Whether you want speed, simplicity, space, or super-power, we’ve got you covered.
              </p>
              <ul className="space-y-4 font-medium text-[#404040]">
                <li className="flex items-center gap-2">✓ Domain transfers are free and easy</li>
                <li className="flex items-center gap-2">✓ 24/7 Knowledgeable Support</li>
                <li className="flex items-center gap-2">✓ Privacy & security included</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-[#f3f3f3] rounded-2xl h-80 flex items-center justify-center text-gray-400 font-bold">
              ILLUSTRATION_PLACEHOLDER
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#404040] text-white py-12 text-center text-sm">
        <p>&copy; 2026 Namecheap Clone Project. Not affiliated with namecheap.com.</p>
      </footer>
    </div>
  );
}
