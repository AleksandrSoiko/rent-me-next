import HeroSection from './components/Hero'
import Header from './components/header'
import Footer from './components/footer'
import RentBuySelect from './components/RentBuySelect'
import Achievements from './components/Achievements'
import LatestOffers from './components/LatestOffers'
import ServicesProvide from './components/ServicesProvide'
import EasyToSell from './components/EasyToSell'
import MobileInstaling from './components/MobileInstaling'

export default function Home() {
  return (
    <>
      <Header />
      <div className="my-6 md:mt-24 md:mb-20 lg:mt-20">
        <HeroSection />
      </div>
      {/* <section className="flex flex-col items-center mx-4 max-md:py-[1.44rem] md:pb-16">
        <RentBuySelect />
      </section> */}
      {/* <section
        className="flex flex-col items-center relative py-12 md:py-16 lg:py-[6.25rem] mx-4"
      >
        <Achievements />
      </section> */}
      {/* <section className="mt-12 mb-6 mx-4 md:mb-16 lg:mb-20 flex flex-col items-center">
        <p
          className="text-center font-Comfortaa text-2xl font-normal leading-[1.8rem] md:text-[3.125rem] md:leading-[3.75rem]"
        >
          Latest offers
        </p>
        <ul
          className="flex max-md:flex-col md:flex-wrap items-center md:gap-8 lg:gap-5 md:justify-center lg:w-[71.8rem]"
        >
          <LatestOffers />
        </ul>
        <div className="flex gap-4 justify-center mt-8 md:mt-10">
          <p className="font-Manrope font-medium text-xl leading-[1.5rem]">
            Show more properties
          </p>
          <button>
            <svg width="25" height="26" viewBox="0 0 25 26">
              <use href="partials/HomePage/sprite.svg#show-more"></use>
            </svg>
          </button>
        </div>
      </section> */}
      {/* <section className="relative py-12 md:py-16 flex-col flex items-center">
        <ServicesProvide />
      </section> */}
      {/* <section className="my-12 lg:my-20 md:my-16 mx-4 flex flex-col items-center">
        <EasyToSell />
      </section> */}
      {/* <section
        className="lg:w-[1180px] lg:mx-[auto] overflow-hidden px-4 md:mx-8 md:px-8 pt-12 md:py-10 md:mt-32 md:mb-16 pb-[3.06rem] mx-4 shadow-[8px_8px_24px_0px_rgba(87,116,205,0.1),-8px_-8px_24px_0_rgba(87,116,205,0.1)] rounded-lg relative"
      >
        <MobileInstaling />
      </section> */}
      <Footer />
    </>
  )
}
