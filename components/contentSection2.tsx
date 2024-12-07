import React from 'react'
import Btn from './btn'
import Image from 'next/image'

const Contentsection2 = () => {
    return (
        <section className="justify-self-center w-full max-w-[1180px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[141px] my-[80px] px-4">
            <div className="w-full max-w-[470px] h-auto flex flex-col gap-4 lg:order-1 order-2">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[35px] font-serif font-bold text-left leading-[125%] text-[#212529]">
                    Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className="text-[14px] sm:text-[15px] leading-[125%] text-[rgba(33,37,41,0.5)]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
                <Btn bgColor="bg-[#212529]" textColor="white" text="Learn more" />
            </div>

            <div className="w-full max-w-[600px] h-auto lg:order-2 order-1">
                <Image
                    src={"/content2.svg"}
                    alt="contentSection2img"
                    width={600}
                    height={586}
                    className="w-full h-auto"
                />
            </div>
        </section>

    )
}

export default Contentsection2