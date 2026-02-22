import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#f3f3f3] py-12 lg:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#404040] mb-6">
          Buy a domain name
        </h1>
        <p className="text-xl text-[#404040] mb-10 max-w-2xl mx-auto">
          Register a domain name and create your online identity. Use our advanced domain name generator to get your ideal choice right away.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-2 flex flex-col md:row items-stretch">
          <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200">
            <input 
              type="text" 
              placeholder="Register a domain name to start" 
              className="w-full py-4 text-lg outline-none"
            />
          </div>
          <button className="bg-[#de3723] hover:bg-[#c22e1b] text-white font-bold py-4 px-8 rounded-md transition-colors text-lg">
            Search
          </button>
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className="text-[#de3723]">.COM only $6.79*</span>
          <span className="text-[#404040]">.NET - $12.98</span>
          <span className="text-[#404040]">.ORG - $7.48</span>
          <span className="text-[#404040]">.IO - $34.98</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
