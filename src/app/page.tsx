import HeroForm from "@/components/home/hero/HeroForm";
import HeroHeading from "@/components/home/hero/HeroHeading";
import Service from "@/components/home/services/Service";

export default function Home() {
  return (
   <div className="bg-primary">

    {/* ******************************Section ******************************** */}

    <div
      className="relative bg-cover bg-center p-3 lg:p-8 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('https://imgs.search.brave.com/sruhyIEx1-LEtho2cxobt0J2_O2i-8hXLfCjH1vdWFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/OTkyNTcyL3Bob3Rv/L2h2YWMtaW5zdGFs/bGF0aW9uLXdpdGgt/Y2hpbGxlcnMtYW5k/LWNvbXByZXNzb3Jz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1mSlVtcE1mdmlh/ejItcy1KOU9NZzN5/Q2xSblJsYXZxX25Z/MVNXV0drNEY0PQ')" }}
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


{/* ******************************Section ******************************** */}
<div className="">
  <Service/>
</div>

    </div>
  );
}