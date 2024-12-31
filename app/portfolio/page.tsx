import Image from 'next/image'
import React from 'react'
import type { Metadata } from "next";

const page = () => {
    return (
        <div>
            <div className='max-w-[411px] w-auto h-auto flex flex-col items-center justify-between sm:gap-4 gap-3 mx-auto mt-8 mb-20 text-center'>
                <p className='uppercase font-bold sm:text-base text-sm tracking-[5px] text-[var(--green)]'>Works</p>
                <p className='font-bold sm:text-[40px] text-[20px] font-serif text-black'>Portfolio</p>
                <p className='sm:text-xl text-xs tracking-wider leading-[25px] text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <section className='max-w-[1187px] w-full h-auto mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-16'>
                {/* Card 1 */}
                <div className="w-full h-auto border-2 border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web1.svg'
                        alt='web 1'
                        width={570}
                        height={344}
                        quality={100}
                    />
                </div>

                {/* Card 2 */}
                <div className="w-full h-auto border-2 border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web2.svg'
                        alt='web 2'
                        width={570}
                        height={334}
                        quality={100}
                    />
                </div>

                {/* Card 3 */}
                <div className="w-full h-auto border-2 border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web3.svg'
                        alt='web 3'
                        width={570}
                        height={334}
                        quality={100}
                    />
                </div>

                {/* Card 4 */}
                <div className="w-full h-auto border border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web4.svg'
                        alt='web 4'
                        width={570}
                        height={334}
                        quality={100}
                    />
                </div>

                {/* Card 5 */}
                <div className="w-full h-auto border-2 border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web5.svg'
                        alt='web 5'
                        width={570}
                        height={334}
                        quality={100}
                    />
                </div>

                {/* Card 6 */}
                <div className="w-full h-auto border border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web6.svg'
                        alt='web 6'
                        width={570}
                        height={334}
                        quality={100}
                    />
                </div>

                {/* Card 7 */}
                <div className="w-full h-auto border-2 border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web7.svg'
                        alt='web 7'
                        width={570}
                        height={334}
                        quality={100}
                    />
                </div>

                {/* Card 8 */}
                <div className="w-full h-auto border-2 border-black rounded-md">
                    <Image
                        className='w-full h-auto object-cover object-center'
                        src='/web8.jpg'
                        alt='web 8'
                        width={570}
                        height={334}
                        quality={100}
                    />
                </div>
            </section>


            {/* learn more btn */}
            <div className="mb-[99px] mx-auto flex items-center justify-center">
                <button className='sm:w-[170px] w-[120px] h-[48px] rounded-md focus:outline-none transition-all hover:bg-white hover:border-2 hover:border-black hover:leading-[40px] hover:text-black active:bg-black active:text-white bg-black text-white text-center sm:text-[20px] text-[16px] leading-[48px]'>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default page
export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Developed By: Subhan Sheikh",
};