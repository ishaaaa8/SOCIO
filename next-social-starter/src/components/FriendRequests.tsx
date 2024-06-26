import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function FriendRequests() {
  return (
    <div className='p-4 shadow-md bg-white text-sm flex flex-col gap-4'>


      {/* top */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>Friend Requests</span>
        <Link href='/' className='text-blue-500 text-xs'>See all</Link>
      </div>


      {/* bottom */}
        {/* user */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/988039/pexels-photo-988039.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover "></Image>
            <span className='font-semibold'>tsgblom</span>
        </div>

        <div className="flex gap-3 je">

            <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"></Image>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer "></Image>

        </div>

      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/988039/pexels-photo-988039.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover "></Image>
            <span className='font-semibold'>tsgblom</span>
        </div>

        <div className="flex gap-3 je">

            <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"></Image>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer "></Image>

        </div>

      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/988039/pexels-photo-988039.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover "></Image>
            <span className='font-semibold'>tsgblom</span>
        </div>

        <div className="flex gap-3 je">

            <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"></Image>
            <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer "></Image>

        </div>

      </div>



    </div>
  )
}

export default FriendRequests
