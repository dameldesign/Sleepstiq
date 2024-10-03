import { Carousel, CarouselContent, CarouselItem, CarouselPrevious } from '@/components/ui/carousel';
import { Testimonial } from '@/types/data-interface';

interface TestimonialSliderProps {
  products: Testimonial[];
}

export default function ProductSlider({ products }: TestimonialSliderProps) {
  return (
    <>
      <section className="w-full py-4">
        <h1 className="text-primary font-bold text-start md:w-[80%] text-4xl mb-5">Product Reviews</h1>

        <div className="mx-auto lg:max-w-8xl px-3">
          <Carousel
            opts={{
              loop: true,
              align: 'start',
            }}
            // plugins={[
            //   Autoplay({
            //     delay: 2000,
            //   }),
            // ]}
          >
            <CarouselContent>
              {products.map((products, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-[27%] h-[480px]">
                  <div className="flex bg-white shadow-2xl h-[420px]  rounded-lg flex-col px-4 py-5 sm:p-6">
                    <img className="h-[210px] w-full" alt={products.name} src={products.productSrc} loading="lazy" />
                    <q className="flex-1 text-[#4D533C] text-base font-light italic opacity-80  text-left">
                      {products.quote}
                    </q>
                    <div className="mt-6 flex gap-3">
                      <div>
                        <p className="text-sm mb-3 font-bold text-[#4D533C]">{products.name}</p>
                        <img className="h-[12px] w-[100px]" alt={products.name} src={products.imgSrc} loading="lazy" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute hidden md:flex left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
