import heroData from "@/content/home/hero"
import Button from "@/components/ui/Button"

function HeroHeading() {
  return (
    <div className="flex flex-col gap-6  justify-center">
        <h1 className="text-bold text-3xl   text-justify">{heroData.title}</h1>
        <p className="text-bold text-lg text-justify ">{heroData.description}</p>
        <h1 className="text-tertiary text-3xl max-lg:text-center ">{heroData.number}</h1>

        <Button text={heroData.ButtonText} className="bg-tertiary  lg:w-2/3" />
    </div>
  )
}

export default HeroHeading
