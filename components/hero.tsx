import React from 'react'
import Btn from './btn'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-[100%] xl:h-[460px] lg:h-[390px] md:h-[354px] sm:h-[574px] h-[564px] md: bg-[#74C69D] flex justify-center">
      <div className="xl:w-[1190px] lg:w-[1000px] md:w-[740px] sm:w-[620px] w-[320px] xl:h-[378px] lg:h-[360px] md:h-[320px] sm:h-[544px] h-[514px] flex flex-wrap lg:justify-between md:justify-between sm:justify-center items-center xl:gap-[120px] md:gap-[30px] sm:gap-[10px] gap-[30px]">

        <div className="xl:w-[416px] lg:w- w-[315px] h-[288px] xl:h-[299px] md:order-1 order-2 flex flex-col md:items-start items-center lg:gap-[02px] md:gap-[25px] sm:gap-[10px] gap-[2px]">
          <div className="flex flex-col md:items-start items-center gap-[15px] w-[100%] xl:[226px] h-[215px]">
            <h5 className="xl:w-[113px] xl:h-[20px] w-[113px] h-[20px] font-sans font-bold text-[16px] leading-[125%] text-white md:text-left text-center">WELCOME</h5>
            <h2 className="xl:w-[416px] xl:h-[100px] w-[100%] h-[50px] font-serif font-bold xl:text-[40px] text-[20px] leading-[125%] text-white md:text-left text-center">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="xl:w-[416px] xl:h-[76px] w-[100%] h-[95px] font-sans font-normal text-[15px] leading-[125%] text-white opacity-[75%] md:text-left text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
          </div>

          <Btn
            bgColor='bg-white'
            textColor='black'
            text='Explore'
          />
        </div>

        <div className="md:order-2 order-1 xl:w-[644px] xl:h-[378px] lg:w-[600px] lg:h-[348px] md:w-[370px] sm:w-[400px] sm:h-[244px] w-[320px] h-[196px]">
          <Image className='w-[100%] h-[100%]' src={'/heroImg.png'} alt='Hero image' width={600} height={600} />

        </div>
      </div>
    </div>
  )
}

export default Hero