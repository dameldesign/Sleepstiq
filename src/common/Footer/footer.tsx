import backgroundImage from '../../../public/images/footer.png';
import { Link } from 'react-router-dom'


export default function Footer() {
  const menuItems = [
    { title: 'About', link: '#' },
    { title: 'Blog', link: '#' },
    { title: 'Contact', link: '#' },
    { title: 'Jobs', link: '#' },
  ];

  const legalMenuItems = [
    { title: 'Phone', link: '#', color: 'black' },
    { title: '+234 708 507 3128', link: '#' },
    { title: 'Address', link: '#', color: 'black' },
    { title: '16, Ogindipe Close, Upston  Close', link: '#' },
  ];

  return (
    <footer
      className=" bg-[#12305B] text-white bg-cover auto md:h-auto bg-center bg-no-repeat   py-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" flex flex-col gap-14  items-center justify-between">
        <img src="/images/Brand-white.svg" alt="Sleep Petiq Logo" className="h-16  flex items-start justify-start" />

        <div className="container mx-auto mt-8 px-4 md:px-10">
          <div className="flex  flex-col  md:flex-row gap-8">
            <div className="text-left md:basis-[50%] place-self-start justify-center  flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-6 text-[#ABABAB]  ">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="hover:text-white  inline-block">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left md:basis-[80%] place-self-start justify-center flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-6">
                {legalMenuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className={`hover:text-gray-300 inline-block ${item.color === 'black' ? 'text-[#ABABAB]' : ''}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/**
            |--------------------------------------------------
            | Advisory
            |--------------------------------------------------
            */}
            <div className="flex flex-start flex-col w-[99%] justify-start text-left">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <p className="text-base flex flex-col items-start justify-center gap-4">
                These statements have not been evaluated by the Food and Drug Administration. This product is not
                intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed
                on the label. All trademarks and copyrights are property of their respective owners and not affiliated
                with nor do they endorse this product. Results may vary.
                <span>
                  By using our website or product, you agree to follow our <br />{' '}
                  <span className="text-[#8FE2FF]">terms of service.</span>{' '}
                </span>
              </p>
            </div>

            <div className="flex flex-col md:basis-[90%] gap-4 items-start justify-start  ">
              <div className="border-l text-left border-gray-600 pl-8">
                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                <p className="mb-4">Feel free to get in touch with us vai email</p>
                <p className="mb-4 text-2xl font-bold">hello@sleepstiq.com</p>
                <img src="/images/Social Media icon.png" alt="" />
              </div>
              <div className="mt-4 pl-8  pt-4 text-[#ABABAB] text-start">
                <p>&copy; 2024 Sleep Petiq. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
