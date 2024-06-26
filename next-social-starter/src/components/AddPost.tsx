import React from 'react'
import Image from 'next/image'
function AddPost() {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* avatar */}
      <Image src="https://images.pexels.com/photos/192455/pexels-photo-192455.jpeg?cs=srgb&dl=pexels-leah-newhouse-50725-192455.jpg&fm=jpg&_gl=1*2vp4rv*_ga*MjA3MTczMTk0Mi4xNzE5NDE5NzI0*_ga_8JE65Q40S6*MTcxOTQxOTcyNC4xLjEuMTcxOTQyMDYyMS4wLjAuMA.." alt="" width={48} height={48} className='w-12 h-12 object-cover rounded-full'></Image>

      {/* post */}
      <div className='flex-1'>
        {/* text input */}
        <div className='flex gap-4'>
          <textarea placeholder="What's in your mind? " name='' id='' className='bg-slate-100 rounded-lg flex-1 p-2'></textarea>
          <Image src="/emoji.png" alt="" width={20} height={20} className='w-5 h-5 cursor-pointer self-end'></Image>
        </div>




        {/* post options */}


        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>

          <Image src="/addimage.png" alt="" width={20} height={20}></Image>
        Photo

          </div>
          <div className='flex items-center gap-2 cursor-pointer'>

          <Image src="/addVideo.png" alt="" width={20} height={20}></Image>
          Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>

          <Image src="/poll.png" alt="" width={20} height={20}></Image>
          Poll
          </div>
        
        </div>
          <div className='flex items-center gap-2 cursor-pointer'>

          <Image src="/addevent.png" alt="" width={20} height={20}></Image>
         Event
          </div>
          
      </div>
    </div>
  )
}

export default AddPost
