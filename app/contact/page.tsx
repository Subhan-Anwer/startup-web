import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Text */}
            <div className='max-w-[411px] w-auto h-auto flex flex-col items-center justify-between sm:gap-4 gap-3 mx-auto mt-8 mb-20 text-center'>
                <p className='font-bold sm:text-[40px] text-[20px] font-serif text-black'>Contact Us</p>
                <p className='sm:text-xl text-xs tracking-wider leading-[25px] text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {/* Content */}
            <div className="max-w-[1180px] h-auto mx-auto flex flex-wrap gap-[21px] items-center justify-center mb-[93px]">
                <div className='lg:w-[575px] w-full min-h-[385px] flex flex-col gap-[21px] sm:p-0 p-3'>
                    <div className="flex flex-col sm:gap-4 gap-2">
                        <label htmlFor="name" className='text-[#000000] sm:text-xl text-base'>Name</label>
                        <input id="name" type="text" className='w-full h-[38px] border border-black bg-[#EEEEEE] rounded-md pl-2' />
                    </div>

                    <div className="flex flex-col sm:gap-4 gap-2">
                        <label htmlFor="name" className='text-[#000000] sm:text-xl text-base'>Name</label>
                        <input id="name" type="text" className='w-full h-[38px] border border-black bg-[#EEEEEE] rounded-md pl-2' />
                    </div>

                    <div className="flex flex-col sm:gap-4 gap-2">
                        <label htmlFor="msg" className='text-[#000000] sm:text-xl text-base'>Message</label>
                        <textarea name="msg" id='msg' className='w-full min-h-[75px] border border-black bg-[#EEEEEE] rounded-md pl-2'></textarea>
                    </div>

                    <button className='w-full h-[48px] sm:text-[20px] text-base text-center rounded-md bg-[#212529] transition-all focus:outline-none hover:bg-[#2b3035] active:bg-[#141618] text-white'>Submit</button>
                </div>


                <div className='lg:w-[575px] w-full lg:p-0 p-2'>
                    <Image className='w-full h-auto' src='/map.png' alt='Map Image' width={575} height={384} quality={100} />
                </div>
            </div>
        </div>
    )
}

export default page