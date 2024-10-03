import backgroundImage from '../../public/images/shutterstock_1304655307 1.png';
import Footer from '@/common/Footer/footer';
import Navbar from '@/common/Navbar/Index';
import TestimonialSlider from '@/common/Testimonal';
import NumberInput from '@/components/count/Index';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/types/data';
import { useTheme } from 'next-themes';

const Shop: React.FC = () => {
  /**
  |--------------------------------------------------
  | theme 
  |--------------------------------------------------
  */
  const { theme } = useTheme();
  const mainStyle = theme === 'light' ? { backgroundImage: `url(${backgroundImage})` } : {};

  const handleNumberChange = (value: number) => {
    console.log('New value:', value);
    // Do something with the new value
  };

  return (
    <main className=" min-h-[90vh] mx-auto ">
      <div
        className={`bg-cover  bg-center bg-no-repeat md:h-[811px] relative transition-all duration-300 ${
          theme === 'light' ? 'bg-opacity-100' : 'bg-opacity-0'
        }`}
        style={mainStyle}
      >
        <Navbar />
        <section className="container mx-auto px-4 py-16 md:pl-32 md flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex items-start justify-start flex-col gap-6">
            <p className="text-primary  mb-4">We're here to help you</p>
            <h1 className="text-4xl md:text-[60px] font-bold text-primary mb-4">Relax & Rest</h1>
          </div>
        </section>
      </div>
      {/**
      |--------------------------------------------------
      | About Product
      |--------------------------------------------------
      */}

      <section className=" w-full p-6 md:p-12 mt-12 h-auto flex flex-col">
        {/* image & product */}

        <div className=" flex flex-col md:flex-row items-center gap-6 justify-between mx-auto  w-full md:w-[85%]">
          <div className="">
            <img src="/public/images/Group 3.png" alt="" className="w-[477px] h-[519px]" />
          </div>

          <div className="flex flex-col items-start justify-start gap-4 mt-16 max-w-[421px]">
            <h1 className="text-primary font-bold text-4xl mb-3">About Product</h1>
            <p className="text-primary-foreground font-thin text-base opacity-60  text-start">
              Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and
              chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and
              lull you to bed.
            </p>
            <ul className="text-primary-foreground italic text-start font-thin mb-4 space-y-2">
              <li >🌙 Promotes calm and relaxation.</li>
              <li>💤 Inhalation allows for a rapid effect.</li>
              <li>✅ 100% drug-free, plant-based ingredients.</li>
              <li>‍⚕️ 3rd-party lab tested.</li>
            </ul>
            {/* price */}
            <div className="mt-3 flex flex-row gap-8">
              <div className="flex flex-col items-start gap-2">
                <span className="text-base font-normal">Price</span>
                <span className="text-base font-semibold">USD 50</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="text-base font-normal" htmlFor="quantity">
               Unit
                </label>

                <NumberInput min={1} max={10} onChange={handleNumberChange} />
              </div>
            </div>
            <Button size="lg" className="bg-[#FC5959] w-[225px] mt-8 hover:bg-red-600 text-white">
              Buy
            </Button>
          </div>
        </div>
        {/* Testimonial  */}
        <div className="md:pl-32 mb-32 mt-40 pt-20 border-t">
        <TestimonialSlider testimonials={testimonials} />
      </div>

      </section>

      <Footer />
    </main>
  );
};

export default Shop;
