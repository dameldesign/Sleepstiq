import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const tabsData = [
  {
    label: 'Sleepstiq Product',
    questions: [
      {
        q: 'Q1: How does it work?',
        a: 'Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.',
      },
      { q: 'Q2: Why inhale melatonin?', a: 'Answer about inhaling melatonin...' },
      { q: 'Q3: How much melatonin is there per inhale?', a: 'Answer about melatonin amount...' },
      { q: 'Q4: Is it an e-cigarette or tobacco product?', a: 'Answer about product classification...' },
      { q: "Q5: What's in it?", a: 'Answer about ingredients...' },
      { q: "Q6: What's not in it?", a: "Answer about what's not included..." },
      { q: 'Q7: How long does it last?', a: 'Answer about duration...' },
      { q: 'Q8: How do I know it has run out/died?', a: 'Answer about product depletion...' },
    ],
  },
  {
    label: 'Order',
    questions: [
      { q: 'Q1: How to order?', a: 'Instructions on how to order...' },
      { q: 'Q2: Shipping information?', a: 'Details about shipping...' },
    ],
  },
  {
    label: 'Melantonin',
    questions: [
      { q: 'Q1: What is Melantonin?', a: 'Explanation of Melantonin...' },
      { q: 'Q2: Benefits of Melantonin?', a: 'List of Melantonin benefits...' },
      { q: 'Q3: How to use Melantonin?', a: 'Instructions on Melantonin usage...' },
      { q: 'Q4: Side effects?', a: 'Potential side effects of Melantonin...' },
      { q: 'Q5: Recommended dosage?', a: 'Information on recommended Melantonin dosage...' },
    ],
  },
];

export default function ProductFAQ() {
  const [activeTab, setActiveTab] = useState('Sleepstiq Product');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="w-full  mx-auto p-6 md:p-12 mb-10 min-h-[596px]">
      <div className="md:flex  md:space-x-8  [@media(max-width:1000px)]:space-y-6">
        <div className="md:w-64 md:flex-shrink-0 w-full [@media(max-width:1000px)]:flex">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            orientation="vertical"
            className="w-full sticky [@media(max-width:1000px)]:mt-8 top-6"
          >
            <TabsList className="flex flex-row md:flex-col md:gap-6 h-auto w-full bg-background">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className={`justify-start underline-none  shadow-none px-4 py-2 text-lg ${
                    activeTab === tab.label ? 'font-semibold ' : 'font-normal'
                  }`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="flex-grow mx-auto relative min-h-[700px] md:min-h-[400px] h-auto ">
          {tabsData.map((tab) => (
            <div
              key={tab.label}
              className={`absolute w-full transition-opacity duration-300 ease-in-out ${
                activeTab === tab.label ? 'opacity-100 z-10' : 'opacity-0 z-0'
              } ${isTransitioning ? 'pointer-events-none' : ''}`}
            >
              <Accordion type="single" collapsible className=" w-[100%] md:w-[80%] border-t border-[#BDBDBD]">
                {tab.questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="">
                    <AccordionTrigger className="text-left text-lg  text-primary ">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-start   font-normal text-base">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
