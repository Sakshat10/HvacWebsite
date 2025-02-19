import aboutData from "@/content/home/about"
import Button from "@/components/ui/Button"

function AboutDesc() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">about us</h1>
      <h1 className="text-tertiary font-bold text-xl lg:text-4xl">{aboutData.title}</h1>
      <Button text="learn more" className="bg-tertiary lg:w-1/3"/>
      <p className="text-justify">{aboutData.para1}</p>
      <p className="text-justify">{aboutData.para2}</p>
    </div>
  )
}

export default AboutDesc
