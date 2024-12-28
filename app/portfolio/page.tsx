import React from 'react'

const page = () => {
    return (
        <div>
            <div className='max-w-[411px] w-auto h-auto flex flex-col items-center justify-between sm:gap-4 gap-3 mx-auto mt-8 mb-20 border border-black text-center'>
                <p className='uppercase font-bold sm:text-base text-sm tracking-[5px] text-[var(--green)]'>Works</p>
                <p className='font-bold sm:text-[40px] text-[20px] font-serif text-black'>Portfolio</p>
                <p className='sm:text-xl text-xs tracking-wider leading-[25px] text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default page