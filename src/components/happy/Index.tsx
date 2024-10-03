import React from 'react';

export default function Happy() {
  return (
    <div className="mx-auto w-full md:w-[80%]  py-10  mt-32 flex flex-col md:flex-row items-center justify-between">
      {/* text */}
      <div>name</div>
      {/* card  */}
      <div className="flex bg-[#FBF9F2] shadow-2xl h-[450px]  w-[404px]  gap-12 flex-col px-10 py-20 sm:p-6">
        <span className="flex-1 text-[#4D533C] text-xl  font-light italic opacity-80  pt-10 text-left">
          I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.{' '}
        </span>
        <div className="mb-10 flex gap-8 items-center">
          <img
            className="h-[84px] w-[84px] inline-flex"
            alt="name"
            src="/public/images/Mask Group.png"
            loading="lazy"
          />

          <div>
            <p className="text-sm mb-3 font-bold text-[#4D533C] text-left">James Miller</p>
            <p className="text-sm mb-3 font-thin text-[#4D533C]">CEO, Techbias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
