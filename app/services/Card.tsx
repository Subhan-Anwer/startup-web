import React from 'react'
import Image from 'next/image';

const Card = ({ title, price }: { title: string, price: string }) => {
    return (
        <div>
            {/* Card */}
            <div className='max-w-[339px] w-auto min-h-[542px] h-auto shadow-[3px_4px_12px_1px_#00000040] py-[46px] px-[30px] border'>
                <div className='max-w-[279px] mx-auto flex flex-col items-center text-center'>
                    <p className='text-black text-[15px]'>{title}</p>
                    <div className="flex items-center gap-[9px] mb-[10px]">
                        <h1 className='font-bold text-black sm:text-[40px] text-[32px]'>${price}</h1>
                        <p className='text-[15px] text-[#21252980]'>/month</p>
                    </div>
                    <p className='text-[#21252980] sm:text-[15px] text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                </div>

                {/* List */}
                <div className="flex flex-col gap-[11px] mt-[52px] mb-[45px]">
                    <div className='flex gap-[11px] items-center'>
                        <Image src={"/check.png"} width={25} height={25} alt="check" />
                        <p className='sm:text-[15px] text-[13px] text-[#212529]'>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='flex gap-[11px] items-center'>
                        <Image src={"/check.png"} width={25} height={25} alt="check" />
                        <p className='sm:text-[15px] text-[13px] text-[#212529]'>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='flex gap-[11px] items-center'>
                        <Image src={"/check.png"} width={25} height={25} alt="check" />
                        <p className='sm:text-[15px] text-[13px] text-[#212529]'>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='flex gap-[11px] items-center'>
                        <Image src={"/check.png"} width={25} height={25} alt="check" />
                        <p className='sm:text-[15px] text-[13px] text-[#212529]'>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='flex gap-[11px] items-center'>
                        <Image src={"/check.png"} width={25} height={25} alt="check" />
                        <p className='sm:text-[15px] text-[13px] text-[#212529]'>Lorem ipsum, dolor sit </p>
                    </div>
                </div>

                {/* Button */}
                <div className='w-full flex justify-center'>
                    <button className='sm:w-[170px] w-[120px] h-[48px] rounded-md justify-self-center focus:outline-none transition-all hover:bg-white hover:border-2 hover:border-black hover:leading-[40px] hover:text-black active:bg-black active:text-white bg-black text-white text-center sm:text-[20px] text-[16px] leading-[48px]'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card