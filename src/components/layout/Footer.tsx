import Button from "../ui/Button"
import footerLinks from "@/content/footer/footerLinks"

function Footer() {
  return (
    <div className="text-white font-bold text-xl  px-32 pt-10 bg-primary">

      <div className="flex flex-wrap justify-between  items-start gap-4 pb-16">
        <div className="">
            <h1>JOIN OUR TEAM!</h1>
            <Button text="Careers" className="bg-tertiary mt-5"/>
        </div>

        <div className="">
            <h1 className="lg:text-center">Comfort Club</h1>
            <Button text="LEARN MORE!" className="bg-tertiary mt-5"/>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start">
        <div>
            <h1 className="text-tertiary text-3xl font-bold mb-6">(770) 232-6523</h1>
            <p className="text-center">Open Mon - Fri</p>
            <p className="text-center">24 hrs</p>
        </div>

        <div>
            <h1 className="text-center">QUICK LINKS</h1>
            <div className="grid grid-cols-2 gap-y-6 gap-x-24 place-items-center pt-4">
    {footerLinks.map((link, index) => (
      <a key={index} href={link.href} className="text-white hover:underline">
        {link.label}
      </a>
    ))}
  </div>
        </div>

        <div>
            <h1>Licensed & Insured</h1>
        </div>

      </div>


    </div>
  )
}

export default Footer
