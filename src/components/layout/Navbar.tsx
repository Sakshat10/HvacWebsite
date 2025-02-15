import review from "@/content/navbar/review";
import topBanner from "@/content/navbar/topBanner";
import Button from "../ui/Button";


function Navbar() {
  return(
    <div className="">

      <div className="bg-primary flex justify-between font-bold text-2xl items-center px-32 py-4">
        <div><h1>{review.title}</h1></div>
        <div><h1>{review.country}</h1></div>
      </div>

      <div className="bg-white px-32 py-6">
        <div className="flex justify-between items-center">

            {/* top banner */}
            <div className="">
            <div className="text-primary font-semibold text-3xl  mb-6">
               <p>{topBanner.heading}</p>
               <p>{topBanner.subheading}</p>
            </div>
            <Button text="VIEW SPECIALS" className="bg-primary"/>
            
            </div>
        </div>
      </div>




    </div>
  )
}

export default Navbar
