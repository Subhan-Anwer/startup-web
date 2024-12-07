import Hero            from "@/components/hero";
import Partnersection  from "@/components/partnersection";
import Contentsection1 from "@/components/contentSection1";
import Contentsection2 from "@/components/contentSection2";
import Team            from "@/components/teamSection";
import Pricing from "@/components/pricing";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Partnersection/>
      {/* <div className=" bg-orange-500 w-[100%] h-[123px]  flex justify-center items-center"></div> */}
      <Contentsection1/>
      <Contentsection2/>
      <Team/>
      
      {/* <Pricing/> */}


    </div>
  );
}

