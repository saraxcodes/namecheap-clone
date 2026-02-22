import React from 'react';

const products = [
  { name: 'Private email', cat: 'Professional Email', desc: 'Send your brand out there with an email address that matches your domain.', price: '$0.00/2 mo', renew: 'Renews from $1.24/mo', btn: 'Get it free' },
  { name: 'Site Maker', cat: 'Visual', desc: 'Create a personal or business website in minutes, no coding skills needed.', price: '$2.33/mo', renew: 'Instead of $3.88/mo', btn: 'Get offer' },
  { name: 'EasyWP Starter', cat: 'Hosting for WordPress', desc: 'Get a month of FREE web hosting with our EasyWP Starter trial offer.', price: '$0.00/1st mo', renew: 'Renews for $9.88/mo', btn: 'Try now' },
];

const ProductTabs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#404040]">Buy a domain and everything else you need</h2>
        <div className="flex justify-center border-b mb-12 overflow-x-auto">
          {['Promos', 'Domains', 'WordPress', 'Hosting', 'Security', 'Apps'].map((tab, i) => (
            <button key={tab} className={`px-6 py-4 font-bold border-b-2 whitespace-nowrap ${i === 0 ? 'border-[#de3723] text-[#de3723]' : 'border-transparent text-[#404040]'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="border border-gray-200 rounded-lg p-8 flex flex-col hover:shadow-lg transition-shadow">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{p.cat}</span>
              <h3 className="text-2xl font-bold text-[#404040] mb-4">{p.name}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{p.desc}</p>
              <div className="mb-6">
                <span className="block text-2xl font-bold text-[#404040]">{p.price}</span>
                <span className="text-sm text-gray-500">{p.renew}</span>
              </div>
              <button className="w-full py-3 px-6 rounded border-2 border-[#404040] font-bold text-[#404040] hover:bg-[#404040] hover:text-white transition-colors">
                {p.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
