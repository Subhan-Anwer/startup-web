import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full h-[125px] bg-[#74c69d] flex justify-center items-center'>
        <div className='w-[81%] max-w-[1180px] lg:h-[25px] h-[55px]  flex lg:flex-row flex-col justify-between items-center mx-8'>
            <div className='max-w-[242px] w-auto h-[18px] flex justify-center items-center sm:gap-[20px] gap-[10px]'>
                <Image src={"/facebook-icon.png"} width={18} height={18} alt={"facebook"}></Image>
                <Image src={"/instagram.png"} width={18} height={18} alt={"facebook"}></Image>
                <Image src={"/twitter.png"} width={21} height={18} alt={"facebook"}></Image>
                <Image src={"/pinterest.png"} width={18} height={18} alt={"facebook"}></Image>
                <Image src={"/tiktok.png"} width={18} height={18} alt={"facebook"}></Image>
                <Image src={"/whatsapp.png"} width={18} height={18} alt={"facebook"}></Image>
                <Image src={"/youtube.png"} width={23} height={18} alt={"facebook"}></Image>
            </div>


            <h6 className='sm:w-[295px] w-auto h-[25px] text-white leading-[125%] sm:text-[20px] text-[16px] md:text-right text-center'>© Start, 2022. All rights reserved.</h6>
        </div>
    </footer>
  )
}

export default Footer