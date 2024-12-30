import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';
import Card from './Card';

const page = () => {
    return (
        <div>
            {/* Text */}
            <div className='max-w-[411px] w-auto h-auto flex flex-col items-center justify-between sm:gap-4 gap-3 mx-auto mt-8 mb-20 text-center'>
                <p className='uppercase font-bold sm:text-base text-sm tracking-[5px] text-[var(--green)]'>Plans</p>
                <p className='font-bold sm:text-[40px] text-[20px] font-serif text-black'>Our Services</p>
                <p className='sm:text-xl text-xs tracking-wider leading-[25px] text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>


            {/* Cards */}
            <section className="text-gray-600 body-font overflow-hidden mb-[135px]">
                <div className="w-auto h-auto mx-auto flex flex-wrap gap-[105px] justify-center items-center px-6 p-4">
                    {/* Card 1 */}
                    <Card title="Basic" price="100" />
                    {/* Card 2 */}
                    <Card title="Plus" price="250" />
                    {/* Card 3 */}
                    <Card title="Pro" price="400" />
                </div>
            </section>

        </div>
    )
}

export default page

export const metadata: Metadata = {
    title: "Our Services",
    description: "Developed By: Subhan Sheikh",
};