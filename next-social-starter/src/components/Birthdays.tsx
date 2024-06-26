import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Birthdays() {
  return (
    <div className='p-4 shadow-md bg-white text-sm flex flex-col gap-4'>
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>Birthdays</span>
        
      </div>


      {/* bottom */}
        {/* user */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/988039/pexels-photo-988039.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover "></Image>
            <span className='font-semibold'>tsgblom</span>
        </div>

        <div className="flex gap-3 ">

            <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
        </div>

      </div>

      {/* upcoming */}

      <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
      <Image src="/gift.png" alt="" width={24} height={24} ></Image>

      <Link href="/" className='flex flex-col gap-1 text-xs'>
        <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
        <span className='text-gray-500'>See 16 others have upcoming birthdays</span>
      </Link>
      </div>

    </div>
  )
}

export default Birthdays
