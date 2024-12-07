import Image from 'next/image';

function TeamMemberCard({ imageSrc, name, position }:{imageSrc: string, name: string, position: string}) {
  return (
    <div className="w-[252px] h-[299px] flex items-center justify-center shadow-custom rounded-[5px] mx-auto">
      <div className="w-[202px] h-[260px] flex flex-col items-center gap-[19px]">
        <div className="w-[175px] h-[175px]">
          <Image
            src={imageSrc}
            alt={name}
            width={125}
            height={196}
            className="w-[175px] h-[175px] rounded-[50%] border border-black pt-3"
          />
        </div>
        <div className="w-[202px] h-[66px] flex flex-col items-start gap-[15px]">
          <h6 className="w-[202px] h-[30px] font-serif font-bold text-[24px] leading-[125%] text-[#212529]">
            {name}
          </h6>
          <p className="w-[202px] h-[19px] text-[15px] leading-[125%] text-[#212529] opacity-75">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;