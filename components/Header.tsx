import React from 'react';
import Link from 'next/image';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold text-[#404040]">
            <span className="text-[#de3723]">Name</span>cheap
          </div>
          <nav className="hidden lg:flex items-center gap-6 font-medium text-[#404040]">
            <a href="#" className="hover:text-[#de3723]">Domains</a>
            <a href="#" className="hover:text-[#de3723]">Hosting</a>
            <a href="#" className="hover:text-[#de3723]">WordPress</a>
            <a href="#" className="hover:text-[#de3723]">Email</a>
            <a href="#" className="hover:text-[#de3723]">Apps</a>
            <a href="#" className="hover:text-[#de3723]">Security</a>
            <a href="#" className="hover:text-[#de3723]">Transfer</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block font-medium text-[#404040]">Sign In</button>
          <button className="bg-[#404040] text-white px-4 py-2 rounded font-medium">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
