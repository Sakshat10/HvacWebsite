import AboutDesc from "@/components/home/about/AboutDesc";
import AboutImg from "@/components/home/about/AboutImg";
import FAQ from "@/components/home/faq/Faq";
import HeroForm from "@/components/home/hero/HeroForm";
import HeroHeading from "@/components/home/hero/HeroHeading";
import Service from "@/components/home/services/Service";
import estimate from "@/content/home/estimate";
import Button from "@/components/ui/Button";
import Testimonial from "@/components/home/testimonial/Testimonial";
import Map from "@/components/home/map/Map";
import ServiceSection from "@/components/home/serviceSection/ServiceSection";
import FinancingBanner from "@/components/home/FinancingBanner/FinancingBanner";

export default function Home() {
  return (
   <div className="bg-primary">

    {/* ******************************Section 1 hero******************************** */}

    <div
      className="relative bg-cover bg-center p-3 lg:p-8 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.webp')"}}
    >

      <div
        className="absolute  inset-0 bg-primary opacity-70"
        style={{
          clipPath: 'polygon(0 0, 60% 0, 45% 100%, 0% 100%)',
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 grid grid-cols-1 place-items-center lg:ml-8  lg:grid-cols-2 max-lg:gap-10 w-full">
        <HeroHeading />
        <HeroForm />
      </div>
    </div>


{/* ******************************Section 2 services ******************************** */}
    <div className="">
      <Service/>
    </div>

{/* ******************************Section 3 about ******************************** */}
    <div className="bg-primary grid lg:grid-cols-2 grid-cols-1 gap-9  place-items-center lg:px-10 px-4 py-8">
      <AboutDesc/>
      <AboutImg/>
    </div>

{/* ******************************Section 3 about ******************************** */}
    <div>
      <Map/>
    </div>

{/* ******************************Section 4  ******************************** */}
   <Testimonial/>

{/* ******************************Section 5  ******************************** */}
<div className="bg-dark flex flex-wrap items-center justify-center gap-4 lg:gap-10 px-3 py-5">
      <h1 className="font-bold text-xl max-lg:text-center md:text-2xl">{estimate.title}</h1>
      <Button text={estimate.ButtonText} className="bg-tertiary lg:w-1/5" />
    </div>    

{/* ******************************Section 6  ******************************** */}
    <div className="bg-white text-black">
     <FAQ/>
    </div>

{/* ******************************Section 7  ******************************** */}
    <div>
      <ServiceSection/>
    </div>
{/* ******************************Section 8  ******************************** */}
    <div className="bg-white lg:p-10 p-4">
      <FinancingBanner/>
    </div>


    </div>
  );
}