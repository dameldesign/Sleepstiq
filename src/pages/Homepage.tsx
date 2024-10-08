import Navbar from '@/common/Navbar/Index';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import backgroundImage from '../../public/images/Slider.png';
import { logos, products, testimonials } from '@/types/data';
import Footer from '@/common/Footer/footer';
import TestimonialSlider from '@/common/Testimonal';
import ShopNow from '@/components/shop_now/Index';
import Mission from '@/common/Mission/Index';
import Happy from '@/components/happy/Index';
import ProductSlider from '@/common/Product/Index';

export default function Homepage() {
  /**
  |--------------------------------------------------
  | theme 
  |--------------------------------------------------
  */
  const { theme } = useTheme();
  const mainStyle = theme === 'light' ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <main className=" min-h-[90vh] mx-auto ">
      <div
        className={`bg-cover  bg-center bg-no-repeat h-[811px] relative transition-all duration-300 ${
          theme === 'light' ? 'bg-opacity-100' : 'bg-opacity-0'
        }`}
        style={mainStyle}
      >
        <Navbar />
        <section className="container mx-auto px-4 py-16 md:pl-32 md flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex items-start justify-start flex-col gap-6">
            <p className="text-primary  mb-4">We're here to help you</p>
            <h1 className="text-4xl md:text-[60px] font-bold text-primary mb-4">Relax & Rest</h1>
            <p className="text-base font-thin text-start text-primary mb-6">
              With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.
            </p>
            <Button size="lg" className="bg-[#FC5959] w-[225px] hover:bg-red-600 text-white">
              Visit Shop
            </Button>
          </div>
        </section>

        <section className="bg-white py-12 absolute bottom-0 translate-y-10 md:translate-y-18 shadow-2xl z-10 right-0 w-[80%]">
          <div className="container mx-auto px-12  flex flex-col md:flex-row  items-center justify-between gap-4">
            {logos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-8" />
            ))}
          </div>
        </section>
      </div>
      {/* happy */}
      <Happy />

      {/* Testimonial  */}
      <div className="md:pl-32 pb-12 border-b mt-40 md:pt-20 ">
        <TestimonialSlider testimonials={testimonials} />
      </div>

      {/* Shop Now */}
      <ShopNow />
      {/* Our Mission */}
      <Mission />
      {/* visit */}
      <div className="flex flex-col items-center justify-start [@media(max-width:1000px)]:px-6 gap-4 mt-16 md:w-[60%] border-b pb-16  mx-auto">
        <h1 className="text-primary font-bold text-4xl mb-3">Visit Our Shop</h1>
        <p className="text-primary-foreground font-thin text-base opacity-60  text-start">
          Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A
          few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>

        <Button size="lg" className="bg-[#FC5959] w-[225px] mt-8 hover:bg-red-600 text-white">
          Visit Shop
        </Button>
      </div>

      {/* Testimonial  */}
      <div className="md:pl-32 pb-12  [@media(max-width:1000px)]:px-6   mb-40  pt-28 ">
        <ProductSlider products={products} />
      </div>

      <Footer />
    </main>
  );
}
