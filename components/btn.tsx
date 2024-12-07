import React from 'react'

const Btn = ({ text, bgColor, textColor }: { text: string, bgColor: string, textColor: string }) => {
  return (
    <button
      className={`w-[170px] h-[48px] rounded-[5px] ${bgColor} font-sans font-normal text-[20px] text-${textColor}`}
    >
      {text}
    </button>
  )
}

export default Btn