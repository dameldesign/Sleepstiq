import { Play } from 'lucide-react';

export default function Happy() {
  return (
    <div className="mx-auto w-full md:w-[80%] max  py-10  [@media(max-width:1000px)]:px-6 [@media(max-width:1000px)]:gap-10 mt-32 flex flex-col md:flex-row items-center justify-between">
      {/* text */}
      <div className="flex flex-col items-start  justify-start gap-4 mt-16 max-w-[550px]">
        <span className="text-sm font-thin text-primary mb-4">Our Amazing Story</span>
        <h1 className="text-primary text-start font-bold text-4xl mb-3">10k+Happy Customers</h1>
        <p className="text-primary-foreground font-thin text-base opacity-60  text-start">
          There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team
          with a framework that fosters candid collaboration.
        </p>
        <span className="text-primary flex flex-row items-center justify-center underline  text-start text-base  font-semibold mt-4 space-y-2">
          <Play fill="6" strokeWidth={0} color="#12305B" size={10} /> More know About us
        </span>
      </div>

      {/* card  */}
      <div className="flex bg-[#FBF9F2] shadow-2xl h-[450px]  w-full [@media(max-width:1000px)]:px-6 md:w-[404px]  gap-12 flex-col px-10 py-20 sm:p-6">
        <span className="flex-1 text-[#4D533C] text-xl  font-light italic opacity-80  pt-10 text-left">
          I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.{' '}
        </span>
        <div className="mb-10 flex gap-8 items-center">
          <img className="h-[84px] w-[84px] inline-flex" alt="name" src="/images/Mask Group.png" loading="lazy" />

          <div>
            <p className="text-sm mb-3 font-bold text-[#4D533C] text-left">James Miller</p>
            <p className="text-sm mb-3 font-thin text-[#4D533C]">CEO, Techbias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
