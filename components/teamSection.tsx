import React from 'react'
import TeamMemberCard from './card'
import Btn from './btn'

const Team = () => {
    return (
        <section className="w-full max-w-[1176px] flex flex-col justify-self-center gap-8 items-center my-[40px] lg:my-[80px] px-4">
            {/* Title */}
            <div className="w-full max-w-[404px] flex flex-col items-center gap-4">
                <p className="w-full max-w-[121px] font-sans font-bold text-[12px] leading-[20px] text-center tracking-[5px] uppercase text-[#74C69D]">
                    team
                </p>
                <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-serif font-bold leading-[125%] text-[#212529] text-center">
                    Our Talents
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[125%] text-center text-black">
                    Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
                </p>
            </div>

            {/* Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[47px]">
                {/* Card 1 */}
                <TeamMemberCard
                    imageSrc="/team1.svg"
                    name="Peg Legge"
                    position="CEO"
                />
                {/* Card 2 */}
                <TeamMemberCard
                    imageSrc="/team2.svg"
                    name="Richard Guerra"
                    position="CTO"
                />
                {/* Card 3 */}
                <TeamMemberCard
                    imageSrc="/team3.svg"
                    name="Alexandra Stolz"
                    position="DESIGNER"
                />
                {/* Card 4 */}
                <TeamMemberCard
                    imageSrc="/team4.svg"
                    name="Janet Bray"
                    position="DEVELOPER"
                />
            </div>

            {/* Button */}
            <Btn bgColor="bg-[#212529]" textColor="white" text="View Team" />
        </section>


    )
}

export default Team