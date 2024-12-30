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
            <div className="w-[1180px] mx-auto border border-yellow-400 flex items-center justify-between">
                <div className='w-[575px] h-[385px] bg-red-300'></div>
                <div className='w-[575px] h-[384px] bg-blue-300'></div>
            </div>
        </div>
    )
}

export default page