import React from 'react'
import Image from 'next/image'
import Comments from './Comments'
function Post() {
  return (
    <div className='flex flex-col gap-4'>
      {/* user */}

      <div className='flex justify-between items-center '>
        <div className='flex items-center gap-4'>
    <Image src="https://images.pexels.com/photos/2820874/pexels-photo-2820874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={40} height={40} alt="" className="w-10 h-10 rounded-full"></Image>
    <span className='font-medium'>Spaesk</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" className="w-10 h-10 rounded-full"></Image>
      </div>

      {/* desc/ */}
      <div className='flex flex-col gap-4'>
        <div className='w-full min-h-96 relative'>
        <Image src="https://images.pexels.com/photos/375899/pexels-photo-375899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt="" className="object-cover rounded-md"></Image>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit modi illo, saepe doloremque ut illum molestiae provident quae sed, aut, officiis rerum animi ullam? Tempore aliquam blanditiis magni non necessitatibus.</p>
      </div>

      {/* iteraction */}
      <div className='flex items-center justify-between text-sm my-4' >

        <div className='flex gap-8'>
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <Image src="/like.png"  width={16} height={16} alt="" className="cursor-pointer"></Image>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'> Likes</span></span>
            </div>
            <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/comment.png"  width={16} height={16} alt="" className="cursor-pointer"></Image>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'> Comments</span></span>
            </div>
            
        </div>
        <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/share.png"  width={16} height={16} alt="" className="cursor-pointer"></Image>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'> Share</span></span>
            </div>
         

      </div>
      <Comments/>
    </div>
  )
}

export default Post
