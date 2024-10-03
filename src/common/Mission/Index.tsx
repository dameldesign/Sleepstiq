import React from 'react';

export default function Mission() {
  return (
    <section className=" w-full  md:pl-32 md:pt-32 md:pb-12 my-12 h-auto flex flex-col md:flex-row items-center gap-16 justify-between mx-auto">
      {/* image & product */}


      <div className="flex flex-col items-start  justify-start gap-4 mt-16 max-w-[400px]">
          <h1 className="text-primary font-bold text-4xl mb-3">Our Mission</h1>
          <p className="text-primary-foreground font-thin text-base opacity-60  text-start">
            We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with
            stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and
            people. That's why we created products that aim to -
          </p>
          <ul className="text-primary-foreground opacity-60 italic text-start text-base font-thin mt-4 space-y-2">
              <li>✓ Promote Calm </li>
              <li>✓ Support Sleep </li>
              <li>✓ Reduce Stress </li>
              <li>✓ Aid Relaxation</li>
            </ul>
        </div>

        <div className=" relative bg-green-800 w-full basis-[60%] flex justify-end items-center">
          <img src="/images/Image.png" alt="" className="w-full h-auto md:h-[550px]" />
        </div>


    </section>
  );
}
