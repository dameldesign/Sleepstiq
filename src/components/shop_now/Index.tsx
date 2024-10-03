import { Button } from '../ui/button';

import React from 'react';

export default function ShopNow() {
  return (
    <div>
      {/**
      |--------------------------------------------------
      | About Product
      |--------------------------------------------------
      */}

      <section className=" w-full p-6 md:p-12 mt-12 h-auto flex flex-col">
        {/* image & product */}

        <div className=" flex flex-col md:flex-row items-center gap-6 justify-between mx-auto  w-full md:w-[85%]">
          <div className=" relative">
            <img src="/public/images/Group 3.png" alt="" className="w-[477px] h-[519px]" />
            <div className="absolute bottom-0 flex items-center p-6 mt-3 justify-start left-20 shadow-2xl bg-white h-[158px] w-[453px] rounded-lg">
              <ul className="text-primary-foreground italic text-start font-thin mb-4 space-y-2">
                <li>😊 Promotes calm and relaxation.</li>
                <li>💤 Inhalation allows for a rapid effect.</li>
                <li>✅ 100% drug-free, plant-based ingredients.</li>
                <li>‍⚕️ 3rd-party lab tested.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 mt-16 max-w-[400px]">
            <h1 className="text-primary font-bold text-4xl mb-3">Shop Now</h1>
            <p className="text-primary-foreground font-thin text-base opacity-60  text-start">
              Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and
              chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and
              lull you to bed.
            </p>

            <Button size="lg" className="bg-[#FC5959] w-[225px] mt-8 hover:bg-red-600 text-white">
              Visit Shop
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
