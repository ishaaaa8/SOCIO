import React from 'react'
import Image from 'next/image'
function Stories() {
  return (
    <div className='p-4 bg-white shadow-md overflow-scroll text-xs'>
      <div className='flex gap-8'>

            <div className='flex flex-col items-center gap-2 cursor-pointer'>

            <Image src="" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className='font-medium'>Isha</span>
            </div>
      </div>
    </div>
  )
}

export default Stories
