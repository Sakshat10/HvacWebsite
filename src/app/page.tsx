import Button from "@/components/ui/button";
import heroData from "../content/home/hero";

export default function Home() {
  return (
   <div className=" h-screen gap-5 flex justify-center items-center">
    <h1>{heroData.title}</h1>
    <Button text="VIEW SPECIALS"/>
    </div>
  );
}