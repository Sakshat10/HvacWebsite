import heroData from "@/content/home/hero"
import Button from "@/components/ui/Button"

function HeroHeading() {
  return (
    <div className="flex flex-col gap-6  justify-center">
        <h1 className="text-bold text-3xl lg:text-5xl text-justify">{heroData.title}</h1>
        <p className="text-bold text-md text-justify lg:text-2xl">{heroData.description}</p>
        <h1 className="text-tertiary text-4xl max-lg:text-center lg:text-6xl">{heroData.number}</h1>

        <Button text="BOOK NOW!" className="bg-tertiary  lg:w-2/3"/>
    </div>
  )
}

export default HeroHeading
