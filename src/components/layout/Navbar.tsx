import review from "@/content/navbar/review";
import topBanner from "@/content/navbar/topBanner";
import emergency from "@/content/navbar/emergency";
import navlinks from "@/content/navbar/navlinks";
import Button from "../ui/Button";


function Navbar() {
  return(
    <div className="text-black">

      {/*********************  Review ************************************/}
      <div className="bg-primary text-white flex justify-between font-bold text-2xl items-center px-32 py-4">
        <div><h1>{review.title}</h1></div>
        <div><h1>{review.country}</h1></div>
      </div>

      {/*********************  banner section ************************************/}
      <div className="bg-white px-32 py-6">
        <div className="flex justify-between items-start">

      {/*********************  top banner ************************************/}
            <div className="">
            <div className="text-primary font-semibold text-3xl  mb-6">
               <p>{topBanner.heading}</p>
               <p>{topBanner.subheading}</p>
            </div>
            <Button text="VIEW SPECIALS" className="bg-primary"/>
            </div>

      {/*********************  Emergency ************************************/}
            <div>
              <div className="font-semibold text-black text-3xl  mb-6">
                <p>{emergency.heading}</p>
                <p className="text-primary font-bold  mt-3 text-center">{emergency.subheading}</p>
              </div>
              <div>
                <Button text="BOOK NOW!" className="bg-orange-400"/>
              </div>
            </div>
        </div>

      {/*********************  Navlinks ************************************/}
      <div className="mt-10">
        {/* Navigation Links */}
        <ul className="flex items-center justify-around ">
          {navlinks.map((link, index) => (
            <li key={index} className="relative">
              <a
                href={link.href}
                className="text-2xl"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Navbar
