import Button from "../ui/Button"
import footerLinks from "@/content/footer/footerLinks"
import footerLicense from "@/content/footer/footerLicense"
import footerCopyright from "@/content/footer/footerCopyright"

function Footer() {
  return (
    <div>

    <div className="text-white font-bold text-xl px-10 lg:px-32 pt-10 pb-10 bg-primary">


        {/* ******************************** section 1 *********************** */}

      <div className="grid grid-cols-1 md:grid-cols-2 max-lg:text-center lg:grid-cols-3 gap-8 pb-16">
        <div className="">
            <h1 className="">JOIN OUR TEAM!</h1>
            <Button text="Careers" className="bg-tertiary mt-5 "/>
        </div>
        <div className="">
            <h1 className="text-center">Comfort Club</h1>
            <Button text="LEARN MORE!" className="bg-tertiary mt-5"/>
        </div>
        <div className="">
            <h1 className="lg:text-end">Comfort Club</h1>
            <Button text="LEARN MORE!" className="bg-tertiary mt-5"/>
        </div>
      </div>




    {/* ******************************** section 2 *********************** */}


      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-stretch gap-6">
        <div className="max-lg:text-center">
            <h1 className="text-tertiary  text-3xl  font-bold mb-6">(770) 232-6523</h1>
            <p className="">Open Mon - Fri</p>
            <p className="">24 hrs</p>
        </div>

        <div>
            <h1 className="text-center text-2xl text-tertiary">QUICK LINKS</h1>
            <div className="grid grid-cols-2 gap-y-6 gap-x-24 place-items-center pt-4">
    {footerLinks.map((link, index) => (
        <a key={index} href={link.href} className="text-white hover:underline">
        {link.label}
      </a>
    ))}
  </div>
        </div>

        <div>
            <h1 className="text-center font-bold text-2xl text-tertiary lg:text-end">Licensed & Insured</h1>
            <div className="flex flex-col items-center lg:items-end gap-4 pt-4">
        {footerLicense.map((license, index) => (
            <span key={index} className="text-white">
            {license.label}
          </span>
        ))}
      </div>
        </div>
      </div>
      </div>

    {/* ******************************** section 3 *********************** */}

    <div className="bg-dark text-white text-center py-4 px-4">
      <p className="text-lg flex justify-center items-center  gap-4 flex-wrap">
        © Copyright {footerCopyright.year} {footerCopyright.companyName}.{" "}
        {footerCopyright.rights}
        {footerCopyright.links.map((link, index) => (
          <div key={index}>
            <span className="mx-2">|</span>
            <a
              href={link.href}
              className="hover:underline transition-colors"
            >
              {link.label}
            </a>
          </div>
        ))}
      </p>
    </div>
    </div>
  )
}

export default Footer
