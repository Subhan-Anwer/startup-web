import React from 'react'
import Image from "next/image";
import Btn from './btn';

const Partnersection = () => {
  return (
    <div className="flex flex-col items-center gap-[55px] xl:w-[1158px] lg:w-[1000px] md:w-[730px] sm:w-[602px] w-[80%] xl:h-[370px] sm:h-[711px] h-[750px] justify-self-center mt-[60px]">
      <div className="flex flex-col items-center gap-[16px] sm:w-[411px] w-[100%] sm:h-[162px] h-[167px]">
        <p className="w-[121px] h-[20px] font-sans font-bold text-[12px] leading-[20px] text-center tracking-[5px] uppercase text-[#74C69D]">partners</p>
        <h2 className="sm:w-[341px] w-[205px] sm:h-[50px] h-[30px] font-serif font-bold sm:text-[30px] text-[20px] leading-[125%] text-center text-black">Lorem Ipsum Dolor</h2>
        <p className="sm:w-[411px] w-[100%] sm:h-[60px] h-[85px] font-sans font-normal text-[20px] leading-[125%] text-center text-black">Lorem ipsum, dolor sit amet consectetur
          adipisicing elit.</p>
      </div>


      {/* Icons */}

      <div className="xl:w-[1158px] lg:w-[700px] md:w-[600px] sm:w-[502px] w-[90%]
                      xl:h-[50px] lg:h-[250px] md:h-[300px] sm:h-[300px] h-[400x] 
                      xl:flex-nowrap flex-wrap flex justify-center items-center sm:gap-[40px] gap-[25px]">
        <Image src={"/google.png"} width={152} height={50} alt="Google logo"></Image>
        <Image src={"/microsoft.png"} width={210} height={100} alt="Google logo"></Image>
        <Image src={"/airbnb.png"} width={160} height={50} alt="Google logo"></Image>
        <Image src={"/facebook.png"} width={196} height={38} alt="Google logo"></Image>
        <Image src={"/spotify.png"} width={166} height={50} alt="Google logo"></Image>
      </div>


      {/* Button */}
      <Btn
        bgColor='bg-[#212529]'
        textColor='white'
        text='Learn more'
      />

    </div>
  )
}

export default Partnersection