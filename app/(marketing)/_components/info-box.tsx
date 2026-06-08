import React from 'react'

const InfoBox = ({msg}:{msg:string}) => {
  return (
    <div className='h-36 w-40 py-4 bg-gradient-to-t from-[#181818] via-[#004AAD] to-[#191818] rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center gap-8'>
        <p className="text-md font-chakra uppercase text-white font-medium">{msg}</p>
        <div className="w-36 h-10 bg-[#A176D6]"></div>
    </div>
  )
}

export default InfoBox