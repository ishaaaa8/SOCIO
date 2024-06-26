import React from 'react'
import Image from 'next/image'
function Comments() {
  return (
    <div className=''>

        {/* write */}
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/1650089/pexels-photo-1650089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={32} height={32} className="w-8 h-8 rounded-full flex-1"></Image>
            <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type="text" placeholder="Write a comment" className='bg-transparent outline-none flex-1'/>

                <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer "></Image>
            </div>
        </div>
      {/* comments */}
      <div className=''>
        <div className=' flex gap-4 justify-between mt-6' >
            {/* avatar */}
            <Image src="https://images.pexels.com/photos/1650089/pexels-photo-1650089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full "></Image>
            {/* desc */}
            <div className='flex flex-col gap-2 flex-1'>
               <span className='font-medium'>psidfedf</span> 
               <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est reprehenderit maiores molestiae sint velit assumenda delectus consectetur enim repellendus veritatis! Vel voluptatum cumque aperiam accusantium obcaecati iure illo excepturi? Cupiditate?</p>

               <div className=' flex items-center gap-8 text-xs text-gray-500 mt-2'>
                <div className='flex items-center gap-4'>
                <Image src="/like.png"  width={12} height={12} alt="" className="w-4 h-4 cursor-pointer"></Image>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'> Likes</span></span>
                </div>
                <div>Reply</div>
               </div>
            </div>
            {/* icons */}
            <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer w-4 h-4'></Image>
        </div>
      </div>
    </div>
  )
}

export default Comments
