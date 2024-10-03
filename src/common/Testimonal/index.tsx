import { Carousel, CarouselContent, CarouselItem,  CarouselPrevious } from '@/components/ui/carousel';
import { Testimonial } from '@/types/data-interface';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  return (
    <>
      <section className="w-full py-4">
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-[28%]">
                  <div className="flex bg-[#FBF9F2] min-h-[202px]  h-auto rounded-lg flex-col px-4 py-5 sm:p-6">
                    <q className="flex-1 text-[#4D533C] text-base font-light italic opacity-80  text-left">{testimonial.quote}</q>
                    <div className="mt-6 flex gap-3">
                      <div>
                        <p className="text-sm mb-3 font-bold text-[#4D533C]">{testimonial.name}</p>
                        <img className="h-[12px] w-[100px]" alt={testimonial.name} src={testimonial.imgSrc} loading="lazy" />
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
