import Footer from '@/common/Footer/footer';
import Navbar from '@/common/Navbar/Index';
import React from 'react';
import { Search } from 'lucide-react';
import ProductFAQ from '@/components/faqs/Index';

export default function Faq() {
  return (
    <main className=" min-h-screen mx-auto ">
      <div className="bg-cover  bg-[#FBF9F2] bg-center bg-no-repeat  md:h-[811px] relative transition-all duration-300">
        <Navbar />
        <section className="container mx-auto px-4 pt-20 pb-16 md:pl-32 md flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex items-start justify-start flex-col gap-6">
            <p className="text-primary font-light mb-4 ">We're here to help you</p>

            <h1 className="text-4xl md:text-6xl text-start font-bold text-primary mb-4">How can we assist?</h1>
            {/**
          |--------------------------------------------------
          | Search
          |--------------------------------------------------
          */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs here"
                  className="w-full pl-10 pr-4 py-4  border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProductFAQ />
      <Footer />
    </main>
  );
}
